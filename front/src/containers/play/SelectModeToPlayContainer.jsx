import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

//redux actions
import { updateMode } from "../../redux/slicers/mode";
import { addPlayer } from "../../redux/slicers/player";

//css
import './../../css/Select_mode.css';

//const
import { 
	FriendModeButton,
	SoloEasyModeButton,
	SoloHardModeButton,
	SoloNormalModeButton,
	MultiModeButton
} from "../../components/Buttons";
import { 
    SOLO_EASY,
    SOLO_HARD,
    SOLO_NORMAL,
    MULTI,
	FRIEND
} from '../../components/ConstString';
import {
	AliasTextField,
} from "../../components/TextFields";
// import { Notification } from "../../components/Notifications";

function SelectModeToPlayContainer(props){

	const dispatch = useDispatch()

	// const [mode, setMode] = useState('none')
	const mode = useSelector((state) => state.mode.modeSelected) 
	const [alias, setAlias] = useState("Anonymous");

	const handleInputAlias = (e) => {
		setAlias(e.target.value);
		dispatch(addPlayer(alias));
	};

	return(
		<React.Fragment>
			<div className="Select-mode-tf-lvl0">
				<div className="Select-mode-tf-lvl1">
					Please enter an alias :
				</div>
				<div className="Select-mode-tf-lvl1">
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
			<div className="Select-mode-menu">
				<div className="Select-mode-button">
					<Link to="/PlayContainer">
						<SoloNormalModeButton
							variant="contained"
							disableRipple
							sx={{ color: 'black'}}
							onClick={() => dispatch(updateMode(SOLO_NORMAL))}
						>
							PLAY<br></br>
							Solo Normal Mode
						</SoloNormalModeButton>
					</Link>
				</div>
				<div className="Select-mode-button">
					<Link to="/PlayContainer">
						<SoloEasyModeButton
							variant="contained"
							disableRipple
							onClick={() => dispatch(updateMode(SOLO_EASY))}
						>
							PLAY<br></br>
							Solo Easy Mode
						</SoloEasyModeButton>
					</Link>
				</div>
				<div className="Select-mode-button">
					<Link to="/PlayContainer">
						<SoloHardModeButton
							variant="contained"
							disableRipple
							sx={{ color: 'black'}}
							onClick={() => dispatch(updateMode(SOLO_HARD))}
						>
							PLAY<br></br>
							Solo Hard Mode
						</SoloHardModeButton>
					</Link>
				</div>
				<div className="Select-mode-button">
					<Link to="/PlayContainer">
						<MultiModeButton
							variant="contained"
							disableRipple
							onClick={() => dispatch(updateMode(MULTI))}
						>
							PLAY<br></br>
							Multiplayer Mode<br></br>
							2 Players
						</MultiModeButton>
					</Link>
				</div>
				<div className="Select-mode-button">
					<Link to="/PlayContainer">
						<FriendModeButton
							variant="contained"
							disableRipple
							sx={{ color: 'black'}}
							onClick={() => dispatch(updateMode(FRIEND))}
						>
							PLAY<br></br>
							Multiplayer Mode with a Friend
						</FriendModeButton>
					</Link>
				</div>
			</div>
			<p>Mode selected - {mode}</p>
		</React.Fragment>
	);
}

export default SelectModeToPlayContainer