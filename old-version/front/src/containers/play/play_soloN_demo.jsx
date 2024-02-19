import React from "react";

//css
import './../../css/Play.css';

//functions
import { PlayreGridDemo } from "./player_grid_demo";
import { NextTetrimino } from "./next_tetrimino";

export function PlaySoloNDemo(){
	return(
		<React.Fragment>
			<div className="flex-container">
				<PlayreGridDemo />
				<div className="flex-column-space"></div>
				<div className="info-game-column">
					<div className="info-game-row">
						<b>Next tetrimino</b> :
					</div>
					<div className="info-game-row">
						{NextTetrimino("T")}
					</div>
					<div className="info-game-row">
						<b>Your Score</b> :
					</div>
					<div className="info-game-row">
						<h1>40000</h1>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
