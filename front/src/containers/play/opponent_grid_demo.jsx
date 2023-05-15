import React from "react";

//css
import './../../css/Play.css'

export function Opponent_grid_demo(){
	return(
		<React.Fragment>
			ceci est la grille de l'adversaire
			<div className="opponnent-game-grid">
				<div className="game-grid-row">
					<div className="game-grid-column">
						ceci est 1 case
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}