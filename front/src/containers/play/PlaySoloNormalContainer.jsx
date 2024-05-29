import React from "react";

//css
import './../../css/Play.css';

//functions
import { PlayerGridContainer } from "./PlayerGridContainer";
import { NextTetrimino } from "../../components/game/NextTetrimino";

export function PlaySoloNormalContainer(){
	const next = 'T' //tmp
	const score = 40000 //tmp

	return(
		<React.Fragment>
			<div className="flex-container">
				<PlayerGridContainer />
				<div className="flex-column-space"></div>
				<div className="info-game-column">
					<div className="info-game-row">
						<b>Next tetrimino</b> :
					</div>
					<div className="info-game-row">
						{NextTetrimino(next)}
					</div>
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
