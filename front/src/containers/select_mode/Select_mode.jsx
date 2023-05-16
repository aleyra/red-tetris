import React from "react";
import { Link } from 'react-router-dom';

//css
import './../../css/Select_mode.css';

//const
import { SoloModeButton } from "../../components/buttons";
import { MultiModeButton } from "../../components/buttons";
import { AliasTextField } from "../../components/text-field";

export function Select_Mode(){
	const [newAlias, setNewAlias] = React.useState("");

	//suggestion pour gérer le type de partie demandé en back...
	//L'idée est de set newAlias au moment où on clique sur un bouton
	//par défaut je propose qu'on mettent "Anonymous" comme alias ou un truc du genre par contre j'ai essayé de le set en front et react a boudé
	// const handleClickSolo = () => {
	// 	socket.emit('queue', { type: 'Solo' });
	// };

	// const handleClickMulti = () => {
	// 	socket.emit('queue', { type: 'Multi' });
	// };


	const handleInputAlias = (e) => {
		setNewAlias(e.target.value);
	};

	return(
		<React.Fragment>
			<div className="Select-mode-alias">
				<div className="Select-mode-alias-tf">
					Please enter an alias :
				</div>
				<div className="Select-mode-alias-tf">
					<AliasTextField
						label="Player name"
						InputLabelProps={{
							sx:{
								color:"black",
								// textAlign:"center"
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
					<Link to="/Demo-Solo">
						<SoloModeButton
							variant="contained"
							disableRipple
							// onClick={handleClickSolo}
						>
							PLAY<br></br>
							Solo Mode
						</SoloModeButton>
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
							Multiplayer Mode
						</MultiModeButton>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);

}