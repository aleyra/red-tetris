import React from "react";

//css
import './../../css/Play.css'

//function
import { Coloring_player_cell } from "./coloring_cell";

export function Player_grid_demo(){
	return(
		<React.Fragment>
			<div className="player-game-grid">
				<div className="grid-row">
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("I")}
						{Coloring_player_cell("I")}
						{Coloring_player_cell("I")}
						{Coloring_player_cell("I")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("J")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("L")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("Z")}
						{Coloring_player_cell("Z")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("O")}
						{Coloring_player_cell("O")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("Z")}
						{Coloring_player_cell("Z")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("S")}
						{Coloring_player_cell("S")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("O")}
						{Coloring_player_cell("O")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("S")}
						{Coloring_player_cell("S")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("J")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("L")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("J")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("L")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("S")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("I")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("S")}
						{Coloring_player_cell("S")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("I")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("S")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("I")}
						{Coloring_player_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("Z")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("I")}
						{Coloring_player_cell("L")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("J")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("Z")}
						{Coloring_player_cell("Z")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("L")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("T")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("T")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("L")}
						{Coloring_player_cell("Z")}
						{Coloring_player_cell("I")}
						{Coloring_player_cell("I")}
						{Coloring_player_cell("I")}
						{Coloring_player_cell("I")}
					</div>
					<div className="grid-column">
						{Coloring_player_cell("X")}
						{Coloring_player_cell("X")}
						{Coloring_player_cell("X")}
						{Coloring_player_cell("X")}
						{Coloring_player_cell("X")}
						{Coloring_player_cell("X")}
						{Coloring_player_cell("X")}
						{Coloring_player_cell("X")}
						{Coloring_player_cell("X")}
						{Coloring_player_cell("X")}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}