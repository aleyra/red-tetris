import React from "react";

//css
import './../../css/Play.css';

//functions
import { Player_grid_demo } from "./player_grid_demo";
import { Next_tetrimino } from "./next_tetrimino";

export function Play_soloN_demo(){
	return(
		<React.Fragment>
			<div className="flex-container">
				<Player_grid_demo />
				<div className="flex-column-space"></div>
				<div className="info-game-column">
					<div className="info-game-row">
						<b>Next tetrimino</b> :
					</div>
					<div className="info-game-row">
						{Next_tetrimino("T")}
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
