import React from "react";

//css
import './../../css/Play.css';
import { Player_grid_demo } from "./player_grid_demo";
import { Opponent_grid_demo } from "./opponent_grid_demo";
import { Next_tetrimino } from "./next_tetrimino";

//à la place de "Your opponentX" mettre le pseudo du joueur adverse
export function Play_multi_demo(){
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
						{Next_tetrimino("J")}
					</div>
					<div className="info-game-row">
						<b>Your Score</b> :
					</div>
					<div className="info-game-row">
						<h1>40000</h1>
					</div>
					<div className="flex-row-space"></div>
					<div className="info-game-row">
						<div className="info-game-column">
							<div className="info-game-row">
								<b>Your opponent0's game</b> :
							</div>
							<div className="info-game-row">
								<Opponent_grid_demo />
							</div>
						</div>
						<div className="info-game-column">
							<div className="info-game-row">
								<b>Your opponent1's game</b> :
							</div>
							<div className="info-game-row">
								<Opponent_grid_demo />
							</div> 
						</div>
						<div className="info-game-column">
							<div className="info-game-row">
								<b>Your opponent2's game</b> :
							</div>
							<div className="info-game-row">
								<Opponent_grid_demo />
							</div> 
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
