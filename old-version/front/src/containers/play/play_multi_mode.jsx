import React from "react";

//css
import './../../css/Play.css';
import { PlayerGridDemoContainer } from "./player_grid_demo";
import { OpponentGridDemoContainer } from "./opponent_grid_demo";
import { NextTetrimino } from "./next_tetrimino";

//à la place de "Your opponentX" mettre le pseudo du joueur adverse
export function PlayMultiDemoContainer(){
	return(
		<React.Fragment>
			<div className="flex-container">
				<PlayerGridDemoContainer />
				<div className="flex-column-space"></div>
				<div className="info-game-column">
					<div className="info-game-row">
						<b>Next tetrimino</b> :
					</div>
					<div className="info-game-row">
						{NextTetrimino("J")}
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
								<OpponentGridDemoContainer />
							</div>
						</div>
						<div className="info-game-column">
							<div className="info-game-row">
								<b>Your opponent1's game</b> :
							</div>
							<div className="info-game-row">
								<OpponentGridDemoContainer />
							</div> 
						</div>
						<div className="info-game-column">
							<div className="info-game-row">
								<b>Your opponent2's game</b> :
							</div>
							<div className="info-game-row">
								<OpponentGridDemoContainer />
							</div> 
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
