import React from "react";

//css
import './../../css/Play.css'

//function
import { ColoringPlayerCell } from "../../components/game/ColoringCell";

// const
import { A_GRID } from "../../tmp/a_grid"; //tmp

export function PlayerGridContainer(){
	return(
		<React.Fragment>
			<div className="player-game-grid">
				{A_GRID[0].map((_, columnIndex) => (
					<div key={columnIndex} className="grid-row">
						{A_GRID.map((row, rowIndex) => (
							<div key={rowIndex} className="grid-column">
								{ColoringPlayerCell(row[columnIndex])}
							</div>
						))}
					</div>
				))}
			</div>
		</React.Fragment>
	);
}