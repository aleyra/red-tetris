import React from "react";

//css
import './../../css/Play.css'

export function Opponent_grid_demo(){
	return(
		<React.Fragment>
			ceci est la grille de l'adversaire
			<div className="opponnent-game-grid">
				<div className="grid-row">
					<div className="grid-column">
						ceci est 1 case
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}