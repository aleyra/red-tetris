import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//redux actions
import { getPlayerById, updatePlayer } from "../../redux/slicers/player";

//css
import '../../css/Waiting_Room.css'

//const
import { AliasTextField } from "../../components/TextFields";
import { GreenColoredButton } from "../../components/Buttons";
import {
    MULTI,
	FRIEND
} from '../../components/ConstString';

export function WaitingRoomContainer(){
	//get player's id from socket
	const id = 1;//tmp
	const waiting_nb = 0;//tmp
	const player = useSelector((state) => getPlayerById(state, id));
	console.log(player);


	const dispatch = useDispatch();
	const mode = useSelector((state) => state.mode.modeSelected);

	const [alias, setAlias] = React.useState("");

	const handleInputAlias = (e) => {
		setAlias(e.target.value);
		dispatch(updatePlayer({ id: id, name: alias, score: 0 }));
	};

	const handleClickJoin = () => {
		//dispatch(updateMode(MULTI));
		//dispatch(addPlayer(alias));
		dispatch(updatePlayer({ id: id, name: alias, score: 0 }));
		console.log(alias);
		console.log(player);
	}

	//recup le nom du user qui a cree la room

	if (mode === MULTI && waiting_nb !== 0)
		return(
			<React.Fragment>
				<h1>Welcome to the waiting room</h1>
				<div>You have to wait for {waiting_nb} player(s) on 4 to connect...</div>
			</React.Fragment>
		);
	else if (mode === FRIEND  && waiting_nb !== 0)
		return(
			<React.Fragment>
				<h1>
					Waiting for your friend to connect...
				</h1>
				<div>
					Please send this address to your friend so they can connect to your room...
				</div>
				<h2>
					http://address_host/#/id-of-the-game
				</h2>
			</React.Fragment>
		);
	else
		return(
			<React.Fragment>
				<h1>
					Welcome in {player.name}'s waiting room
				</h1>
				<div>
					Please choose an alias, enter the password and the game will start
				</div>
				<div className="WR_TFs">
					<div className="WR_TF">
						<AliasTextField
							label="Player name"
							InputLabelProps={{
								sx:{
									color:"black",
									justifyContent:"center"
								}
							}}
							variant="outlined"
							sx={{ input: { color: 'black' } }}
							id="outlined-basic"
							onChange={handleInputAlias}
						/>
					</div>
				</div>
				<div className="WR_button">
					<GreenColoredButton
						variant="contained"
						disableRipple
						sx={{ color: 'black'}}
						onClick={handleClickJoin}
					>
						Game Start
					</GreenColoredButton>
				</div>
			</React.Fragment>
		);
}