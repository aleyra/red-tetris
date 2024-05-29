import React from "react";

//css
import './../../../css/Play.css';
import { PlayerGridContainer } from "./PlayerGridContainer";
import { OpponentGridContainer } from "./opponent_grid_demo";
import { NextTetrimino } from "./next_tetrimino";

export function PlayFriendContainer(){
	const opponent = "toi" //tmp
	const next = 'S' //tmp
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
					<div className="flex-row-space"></div>
					<div className="info-game-column">
						<div className="info-game-row">
							<b>{opponent} game</b> :
						</div>
						<div className="info-game-row">
							<OpponentGridContainer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
