import React from "react";

//css
import './../../css/Play.css';

//functions
import { Player_grid_demo } from "./player_grid_demo";
import { Next_tetrimino_demo } from "./next_tetrimino_demo";
import { Next_tetrimino } from "./next_tetrimino";

export function Play_solo_demo(){
	return(
		<React.Fragment>
			<div className="flex-container">
				<Player_grid_demo />
				<div className="flex-column-space"></div>
				<div className="info-game-lvl0">
					<div className="info-game-lvl1">
						<b>Next tetrimino</b> :
					</div>
					<div className="info-game-lvl1">
						{/* <Next_tetrimino_demo /> */}
						{Next_tetrimino("T")}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
