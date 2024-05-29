import React from "react";

//css
import './../../css/Play.css';

//functions
import { PlayerGridContainer } from "./PlayerGridContainer";

export function PlaySoloHardContainer(){
	const score = 40000 //tmp
	return(
		<React.Fragment>
			<div className="flex-container">
				<PlayerGridContainer />
				<div className="flex-column-space"></div>
				<div className="info-game-column">
					<div className="info-game-row">
						<b>Your Score</b> :
					</div>
					<div className="info-game-row">
						<h1>{score}</h1>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
