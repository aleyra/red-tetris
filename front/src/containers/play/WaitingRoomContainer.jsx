import React from "react";
import { useParams } from "react-router-dom";

//css
import '../../css/Waiting_Room.css'

//const
import { AliasTextField, PassWordTextField } from "../../components/TextFields";
import { GreenColoredButton } from "../../components/Buttons";

export function WaitingRoomContainer(mode){
	let { wrid } = useParams();

	const [alias, setAlias] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleInputAlias = (e) => {
		setAlias(e.target.value);
	};

	const handleInputPassword = (e) => {
		setPassword(e.target.value);
	};

	//recup le nom du user qui a cree la room

	const handleClickJoin = async (event) => {
		//changer l'adresse du fetch
		// await fetch(`${process.env.REACT_APP_NESTJS_HOSTNAME}/api/channels/${props?.channel.id}/users`, {
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	method: 'POST',
		// 	credentials: 'include',
		// 	body: JSON.stringify({password: password})
		// })
		// .then(response => {
		// 	if (!response.ok)
		// 		return response;
		// 	else
		// 		//envoyer sur la page http://address_host/#pid
		// })
		// .then(data => {if (data !== undefined) Notification(data);});
	}

	if (mode === "Multi")
		return(
			<React.Fragment>
				<h1>Welcome to the waiting room</h1>
				<div>You have to wait for x player(s) on 4 to connect...</div>
			</React.Fragment>
		);
	// else if (mode === "Friend" /* &&& user === celui qui a creer a room */)
	// 	return(
	// 		<React.Fragment>
	// 			<h1>
	// 				Waiting for your friend to connect...
	// 			</h1>
	// 			<div>
	// 				Please send this address to your friend so they can connect to your room...
	// 			</div>
	// 			<h2>
	// 				http://address_host/#/{wrid}
	// 			</h2>
	// 		</React.Fragment>
	// 	);
	else
		return(
			<React.Fragment>
				<h1>
					Welcome in name's waiting room
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
					<div className="WR_TF">
						<PassWordTextField
							label="Password"
							InputLabelProps={{
								sx:{
									color:"black",
									justifyContent:"center"
								}
							}}
							variant="outlined"
							sx={{ input: { color: 'black' } }}
							id="outlined-basic"
							onChange={handleInputPassword}
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