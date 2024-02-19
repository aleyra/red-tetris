import React from "react";

//css
import './../../css/Play.css'

//function
import { ColoringPlayerCell } from "./coloring_cell";

export function PlayreGridDemo(){
	return(
		<React.Fragment>
			<div className="player-game-grid">
				<div className="grid-row">
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("I")}
						{ColoringPlayerCell("I")}
						{ColoringPlayerCell("I")}
						{ColoringPlayerCell("I")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("L")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("Z")}
						{ColoringPlayerCell("Z")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("O")}
						{ColoringPlayerCell("O")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("Z")}
						{ColoringPlayerCell("Z")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("S")}
						{ColoringPlayerCell("S")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("O")}
						{ColoringPlayerCell("O")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("S")}
						{ColoringPlayerCell("S")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("J")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("J")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("S")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("I")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("S")}
						{ColoringPlayerCell("S")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("I")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("S")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("I")}
						{ColoringPlayerCell("")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("Z")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("I")}
						{ColoringPlayerCell("L")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("J")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("Z")}
						{ColoringPlayerCell("Z")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("L")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("T")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("L")}
						{ColoringPlayerCell("Z")}
						{ColoringPlayerCell("I")}
						{ColoringPlayerCell("I")}
						{ColoringPlayerCell("I")}
						{ColoringPlayerCell("I")}
					</div>
					<div className="grid-column">
						{ColoringPlayerCell("X")}
						{ColoringPlayerCell("X")}
						{ColoringPlayerCell("X")}
						{ColoringPlayerCell("X")}
						{ColoringPlayerCell("X")}
						{ColoringPlayerCell("X")}
						{ColoringPlayerCell("X")}
						{ColoringPlayerCell("X")}
						{ColoringPlayerCell("X")}
						{ColoringPlayerCell("X")}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}