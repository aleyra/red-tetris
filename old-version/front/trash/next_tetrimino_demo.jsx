import React from "react";

//css
import './../../css/Play.css'

export function NextTetrimino_demo(){
	return(
		<div className="next-tetrimino-grid">
			<div className="grid-row">
				<div className="grid-column">
					<div className="grid-empty-square"></div>
					<div className="grid-empty-square"></div>
					<div className="grid-empty-square"></div>
					<div className="grid-empty-square"></div>
				</div>
				<div className="grid-column">
					<div className="grid-empty-square"></div>
					<div className="grid-tetriminoT"></div>
					<div className="grid-tetriminoT"></div>
					<div className="grid-tetriminoT"></div>
				</div>
				<div className="grid-column">
					<div className="grid-empty-square"></div>
					<div className="grid-empty-square"></div>
					<div className="grid-tetriminoT"></div>
					<div className="grid-empty-square"></div>
				</div>
				<div className="grid-column">
					<div className="grid-empty-square"></div>
					<div className="grid-empty-square"></div>
					<div className="grid-empty-square"></div>
					<div className="grid-empty-square"></div>
				</div>
			</div>
		</div>
	);
}