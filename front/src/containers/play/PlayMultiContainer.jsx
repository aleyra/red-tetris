import React from "react";

//css
import './../../../css/Play.css';
import { PlayerGridContainer } from "./PlayerGridContainer";
import { OpponentGridContainer } from "./OpponentGridContainer";
import { NextTetrimino } from "../../components/game/NextTetrimino";

export function PlayMultiContainer(){
	const opponent0 = "toi" //tmp
	const opponent1 = "lui" //tmp
	const opponent2 = "elle" //tmp
	const next = 'J' //tmp
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
					<div className="info-game-row">
						<div className="info-game-column">
							<div className="info-game-row">
								<b>{opponent0}'s game</b> :
							</div>
							<div className="info-game-row">
								<OpponentGridContainer />
							</div>
						</div>
						<div className="info-game-column">
							<div className="info-game-row">
								<b>{opponent1}'s game</b> :
							</div>
							<div className="info-game-row">
								<OpponentGridContainer />
							</div> 
						</div>
						<div className="info-game-column">
							<div className="info-game-row">
								<b>{opponent2}s game</b> :
							</div>
							<div className="info-game-row">
								<OpponentGridContainer />
							</div> 
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
