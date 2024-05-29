import React from "react";

//css

//function
import { ColoringOpponentCell } from "../../components/game/ColoringCell";

//const
import { A_GRID } from "../../tmp/a_grid";

export function OpponentGridContainer(){
    return (
        <React.Fragment>
            <div className="opponent-game-grid">
                {A_GRID[0].map((_, columnIndex) => (
                    <div key={columnIndex} className="grid-row">
                        {A_GRID.map((row, rowIndex) => (
                            <div key={rowIndex} className="grid-column">
                                {ColoringOpponentCell(A_GRID[rowIndex][columnIndex])}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}
