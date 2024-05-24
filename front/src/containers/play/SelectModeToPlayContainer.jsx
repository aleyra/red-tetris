import React, { useState } from "react";
import { connect } from 'react-redux'

//redux actions
import { selectMode } from "../../redux/mode/modeActions";

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
	PassWordTextField 
} from "../../components/TextFields";
// import { Notification } from "../../components/Notifications";

function SelectModeToPlayContainer(props){
	// const [mode, setMode] = useState('none')
	const [alias, setAlias] = useState("Anonymous");
	const [password, setPassword] = useState("");

	const handleInputAlias = (e) => {
		setAlias(e.target.value);
	};

	const handleInputPassword = (e) => {
		setPassword(e.target.value);
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
					{/* <Link to="/Demo-SoloN"> */}
						<SoloNormalModeButton
							variant="contained"
							disableRipple
							sx={{ color: 'black'}}
							onClick={() => props.selectMode(SOLO_NORMAL)}
						>
							PLAY<br></br>
							Solo Normal Mode
						</SoloNormalModeButton>
					{/* </Link> */}
				</div>
				<div className="Select-mode-button">
					{/* <Link to="/Demo-SoloE"> */}
						<SoloEasyModeButton
							variant="contained"
							disableRipple
							onClick={() => props.selectMode(SOLO_EASY)}
						>
							PLAY<br></br>
							Solo Easy Mode
						</SoloEasyModeButton>
					{/* </Link> */}
				</div>
				<div className="Select-mode-button">
					{/* <Link to="/Demo-SoloH"> */}
						<SoloHardModeButton
							variant="contained"
							disableRipple
							sx={{ color: 'black'}}
							onClick={() => props.selectMode(SOLO_HARD)}
						>
							PLAY<br></br>
							Solo Hard Mode
						</SoloHardModeButton>
					{/* </Link> */}
				</div>
				<div className="Select-mode-button">
					{/* <Link to="/Demo-Multi"> */}
						<MultiModeButton
							variant="contained"
							disableRipple
							onClick={() => props.selectMode(MULTI)}
						>
							PLAY<br></br>
							Multiplayer Mode<br></br>
							2 Players
						</MultiModeButton>
					{/* </Link> */}
				</div>
				<div className="Select-mode-button">
						<FriendModeButton
							variant="contained"
							disableRipple
							sx={{ color: 'black'}}
							onClick={() => props.selectMode(FRIEND)}
						>
							PLAY<br></br>
							Multiplayer Mode with a Friend
						</FriendModeButton>
				</div>
			</div>
			<div className="Select-mode-tf-lvl0">
				<div className="Select-mode-tf-lvl1">
					Please enter a Password for Multiplayer Mode with a Friend :
				</div>
				<div className="Select-mode-tf-lvl1">
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
			{/* <p>Mode selected - {props.modeSelected}</p> */}
		</React.Fragment>
	);
}

const mapStateToProps = state => {
    return {
        modeSelected: state.mode.modeSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectMode: mode => dispatch(selectMode(mode))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectModeToPlayContainer)