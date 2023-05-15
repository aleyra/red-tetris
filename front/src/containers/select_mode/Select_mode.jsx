import React from "react";
import { Link } from 'react-router-dom';

//css
import './../../css/Select_mode.css';

//const
import { SoloModeButton } from "../../components/buttons";
import { MultiModeButton } from "../../components/buttons";

export function Select_Mode(){

	//suggestion pour gérer le type de partie demandé en back...
	// const handleClickSolo = () => {
	// 	socket.emit('queue', { type: 'Solo' });
	// };

	// const handleClickMulti = () => {
	// 	socket.emit('queue', { type: 'Multi' });
	// };

	return(
		<React.Fragment>
			<div className="Menu">
				<div className="Button">
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
				<div className="Button">
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