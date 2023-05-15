import React from "react";

//css
import './../../css/Play.css';
import { Player_grid_demo } from "./player_grid_demo";
import { Opponent_grid_demo } from "./opponent_grid_demo";

export function Play_multi_demo(){
	return(
		<React.Fragment>
			<div className="flex-container">
				<Player_grid_demo />
				<div className="info-and-vs-grid">
					<div className="info-game-lvl0">
						<div className="info-game-lvl1">
							la y'a une info
						</div>
						<div className="info-game-lvl1">
							la y'en a une autre
						</div>
					</div>
					<Opponent_grid_demo />
				</div>
			</div>
		</React.Fragment>
	);
}
