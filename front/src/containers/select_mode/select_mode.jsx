import React from "react";
import { Link } from 'react-router-dom';

//css
import './../../css/Select_mode.css';

//const
import { FriendModeButton, SoloEasyModeButton, SoloHardModeButton, SoloNormalModeButton } from "../../components/buttons";
import { MultiModeButton } from "../../components/buttons";
import { AliasTextField, PassWordTextField } from "../../components/text-field";

export function Select_Mode(){
	const [newAlias, setNewAlias] = React.useState("");
	const [newPwd, setNewPwd] = React.useState("");

	//suggestion pour gérer le type de partie demandé en back...
	//L'idée est de set newAlias au moment où on clique sur un bouton
	//par défaut je propose qu'on mettent "Anonymous" comme alias ou un truc du genre par contre j'ai essayé de le set en front et react a boudé
	//Idem pour newPwd
	// const handleClickSoloNormal = () => {
	// 	socket.emit('queue', { type: 'SoloNormal' });
	// };

	// const handleClickSoloEasy = () => {
	// 	socket.emit('queue', { type: 'SoloEasy' });
	// };

	// const handleClickSoloHard = () => {
	// 	socket.emit('queue', { type: 'SoloHard' });
	// };

	// const handleClickMulti = () => {
	// 	socket.emit('queue', { type: 'Multi' });
	// };

	// const handleClickFriend = () => {
	// 	socket.emit('queue', { type: 'Friend' });
	// };


	const handleInputAlias = (e) => {
		setNewAlias(e.target.value);
	};

	const handleInputPassword = (e) => {
		setNewPwd(e.target.value);
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
					<Link to="/Demo-SoloN">
						<SoloNormalModeButton
							variant="contained"
							disableRipple
							sx={{ color: 'black'}}
							// onClick={handleClickSoloNormal}
						>
							PLAY<br></br>
							Solo Normal Mode
						</SoloNormalModeButton>
					</Link>
				</div>
				<div className="Select-mode-button">
					<Link to="/Demo-SoloE">
						<SoloEasyModeButton
							variant="contained"
							disableRipple
							// onClick={handleClickSoloEasy}
						>
							PLAY<br></br>
							Solo Easy Mode
						</SoloEasyModeButton>
					</Link>
				</div>
				<div className="Select-mode-button">
					<Link to="/Demo-SoloH">
						<SoloHardModeButton
							variant="contained"
							disableRipple
							sx={{ color: 'black'}}
							// onClick={handleClickSoloHard}
						>
							PLAY<br></br>
							Solo Hard Mode
						</SoloHardModeButton>
					</Link>
				</div>
				<div className="Select-mode-button">
					<Link to="/Demo-Multi">
						<MultiModeButton
							variant="contained"
							disableRipple
							// onClick={handleClickMulti}
						>
							PLAY<br></br>
							Multiplayer Mode<br></br>
							4 Players
						</MultiModeButton>
					</Link>
				</div>
				<div className="Select-mode-button">
					<Link to="/Demo-Friend">
						<FriendModeButton
							variant="contained"
							disableRipple
							sx={{ color: 'black'}}
							// onClick={handleClickFriend}
						>
							PLAY<br></br>
							Multiplayer Mode with a Friend						</FriendModeButton>
					</Link>
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
		</React.Fragment>
	);
}