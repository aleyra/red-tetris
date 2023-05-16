import React from "react";

//css
import './../../css/Play.css';
import { Player_grid_demo } from "./player_grid_demo";
import { Opponent_grid_demo } from "./opponent_grid_demo";
import { Next_tetrimino_demo } from "./next_tetrimino_demo";

export function Play_multi_demo(){
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
						<Next_tetrimino_demo />
					</div>
					<div className="flex-row-space"></div>
					<div className="info-game-lvl1">
						<b>Your opponent's game</b> :
					</div>
					<div className="info-game-lvl1">
						<Opponent_grid_demo />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
