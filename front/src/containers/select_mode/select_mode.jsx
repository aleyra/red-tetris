import React from "react";
import { useNavigate } from 'react-router-dom';

//css
import './../../css/Select_mode.css';

//const
import { FriendModeButton, SoloEasyModeButton, SoloHardModeButton, SoloNormalModeButton } from "../../components/Buttons";
import { MultiModeButton } from "../../components/Buttons";
import { AliasTextField, PassWordTextField } from "../../components/TextFields";
import { Notification } from "../../components/Notifications";

export function SelectMode(){
	const [alias, setAlias] = React.useState("");
	const [password, setPassword] = React.useState("");

	const navigate = useNavigate();

	//suggestion pour gérer le type de partie demandé en back...
	//L'idée est de set newAlias au moment où on clique sur un bouton
	//par défaut je propose qu'on mettent "Anonymous" comme alias ou un truc du genre par contre j'ai essayé de le set en front et react a boudé
	//Idem pour newPwd
	const handleClickSoloNormal = () => {
		// socket.emit('queue', { type: 'SoloNormal' });
		//il faut recup le numero de la partie, creer un url avec ce numéro et mettre cet url dans navigate
		navigate('/1');
	};

	const handleClickSoloEasy = () => {
		// socket.emit('queue', { type: 'SoloEasy' });
		//il faut recup le numero de la partie, creer un url avec ce numéro et mettre cet url dans navigate
		navigate('/2');
	};

	const handleClickSoloHard = () => {
		// socket.emit('queue', { type: 'SoloHard' });
		//il faut recup le numero de la partie, creer un url avec ce numéro et mettre cet url dans navigate
		navigate('/3');
	};

	const handleClickMulti = () => {
		// socket.emit('queue', { type: 'Multi' });
		//il faut recup le numero de la partie, creer un url avec ce numéro et mettre cet url dans navigate
		navigate('/4');
	};

	const handleClickFriend = async () => {
		//voir pour envoyer une erreur si le password est inexixtant
		const body = password.length === 0 ? {alias} : {alias, password};
		//changer l'adresse du fetch
		// await fetch(`${process.env.REACT_APP_NESTJS_HOSTNAME}/api/channels/`, {
		// 	method: "POST",
		// 	credentials: "include",
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(body)
		// })
		// .then(response => {
		// 	if (!response.ok)
		// 		return response;
		// 	else {
		// 		socket.emit('queue', { type: 'Friend' });
		// 		//il faut recup le numero de la partie, creer un url avec ce numéro et mettre cet url dans navigate
				navigate('/5');
		// 	}
		// })
		// .then(data => {
		// 	if (data !== undefined) {
		//		Notification(data);
		// 	}
		// });
	};
	
	// = () => {
	// 	
	// };


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
							onClick={handleClickSoloNormal}
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
							onClick={handleClickSoloEasy}
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
							onClick={handleClickSoloHard}
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
							onClick={handleClickMulti}
						>
							PLAY<br></br>
							Multiplayer Mode<br></br>
							4 Players
						</MultiModeButton>
					{/* </Link> */}
				</div>
				<div className="Select-mode-button">
						<FriendModeButton
							variant="contained"
							disableRipple
							sx={{ color: 'black'}}
							onClick={handleClickFriend}
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
		</React.Fragment>
	);
}