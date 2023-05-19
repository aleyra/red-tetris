import React from "react";

//css
import './../../css/Play.css';
import { PlayreGridDemo } from "./player_grid_demo";
import { OpponentGridDemo } from "./opponent_grid_demo";
import { NextTetrimino } from "./next_tetrimino";

//à la place de "Your opponent" mettre le pseudo du joueur adverse
export function PlayFriendDemo(){
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
						{NextTetrimino("S")}
					</div>
					<div className="info-game-row">
						<b>Your Score</b> :
					</div>
					<div className="info-game-row">
						<h1>40000</h1>
					</div>
					<div className="flex-row-space"></div>
					<div className="info-game-column">
						<div className="info-game-row">
							<b>Your opponent's game</b> :
						</div>
						<div className="info-game-row">
							<OpponentGridDemo />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
