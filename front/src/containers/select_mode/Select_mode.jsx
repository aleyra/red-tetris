import React from "react";

//css
import './../../css/Select_mode.css';

//const
import { SoloModeButton } from "../../components/buttons";
import { MultiModeButton } from "../../components/buttons";

export function Select_Mode(){
	return(
		// <React.Fragment>
			<div>test debile</div>
		// </React.Fragment>
	);

	//suggestion pour gérer le type de partie demandé en back...
	// const handleClickSolo = () => {
	// 	socket.emit('queue', { type: 'Solo' });
	// };

	// const handleClickMulti = () => {
	// 	socket.emit('queue', { type: 'Multi' });
	// };

	// return(
	// 	<React.Fragment>
	// 		<div className="Menu">
	// 			<div className="Button">
	// 				<SoloModeButton
	// 					variant="contained"
	// 					disableRipple
	// 					onClick={handleClickSolo}
	// 				>
	// 					PLAY<br></br>
	// 					Solo Mode
	// 				</SoloModeButton>
	// 			</div>
	// 			<div className="Button">
	// 				<MultiModeButton
	// 					variant="contained"
	// 					disableRipple
	// 					onClick={handleClickMulti}
	// 				>
	// 					PLAY<br></br>
	// 					Multiplayer Mode
	// 				</MultiModeButton>
	// 			</div>
	// 		</div>
	// 	</React.Fragment>
	// );

}