import React from "react";

//css
import './../../css/Play.css';

//functions
import { Player_grid_demo } from "./player_grid_demo";

export function Play_solo_demo(){
	return(
		<React.Fragment>
			<div className="flex-container">
				<Player_grid_demo />
				<div className="flex-column-space"></div>
				<div className="info-game-lvl0">
					<div className="info-game-lvl1">
						la y'a une info
					</div>
					<div className="info-game-lvl1">
						la y'en a une autre
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
