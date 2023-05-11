import React from "react";
import { connect } from "react-redux";
import { SoloModeButton, MultiModeButton } from "../../components/buttons";

function Select_Mode(){
	return(
		<>
			<div className='Modes-container'>
				<div className='Mode-button'>
					<SoloModeButton
						variant="contained"
						disableRipple
						onClick={handleClick}
					>
						PLAY<br></br>
						Solo Mode
					</SoloModeButton>
				</div>
				<div className='Mode-button'>
					<MultiModeButton
						variant="contained"
						disableRipple
						onClick={handleClick}
					>
						PLAY<br></br>
						Multiplayer Mode
					</MultiModeButton>
				</div>
			</div>
		</>
	);
}