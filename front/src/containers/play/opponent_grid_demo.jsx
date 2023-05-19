import React from "react";

//css
import './../../css/Play.css'

//function
import { Coloring_opponent_cell } from "./coloring_cell";

export function Opponent_grid_demo(){
	return(
		<React.Fragment>
			<div className="opponent-game-grid">
				<div className="grid-row">
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("I")}
						{Coloring_opponent_cell("I")}
						{Coloring_opponent_cell("I")}
						{Coloring_opponent_cell("I")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("L")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("Z")}
						{Coloring_opponent_cell("Z")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("O")}
						{Coloring_opponent_cell("O")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("Z")}
						{Coloring_opponent_cell("Z")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("S")}
						{Coloring_opponent_cell("S")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("O")}
						{Coloring_opponent_cell("O")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("S")}
						{Coloring_opponent_cell("S")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("J")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("J")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("S")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("I")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("S")}
						{Coloring_opponent_cell("S")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("I")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("S")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("I")}
						{Coloring_opponent_cell("")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("Z")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("I")}
						{Coloring_opponent_cell("L")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("J")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("Z")}
						{Coloring_opponent_cell("Z")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("L")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("T")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("L")}
						{Coloring_opponent_cell("Z")}
						{Coloring_opponent_cell("I")}
						{Coloring_opponent_cell("I")}
						{Coloring_opponent_cell("I")}
						{Coloring_opponent_cell("I")}
					</div>
					<div className="grid-column">
						{Coloring_opponent_cell("X")}
						{Coloring_opponent_cell("X")}
						{Coloring_opponent_cell("X")}
						{Coloring_opponent_cell("X")}
						{Coloring_opponent_cell("X")}
						{Coloring_opponent_cell("X")}
						{Coloring_opponent_cell("X")}
						{Coloring_opponent_cell("X")}
						{Coloring_opponent_cell("X")}
						{Coloring_opponent_cell("X")}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}