import React from "react";

//css
import './../../css/Play.css'

//function
import { ColoringPlayerCell } from "./coloring_cell";

function CaseI(){
	return(
		<div className="next-tetrimino-grid">
			<div className="grid-row">
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("I")}
					{ColoringPlayerCell("I")}
					{ColoringPlayerCell("I")}
					{ColoringPlayerCell("I")}
				</div>
				<div className="grid-column">
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
				</div>
			</div>
		</div>
	);
}

function CaseJ(){
	return(
		<div className="next-tetrimino-grid">
			<div className="grid-row">
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("J")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("J")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("J")}
					{ColoringPlayerCell("J")}
					{ColoringPlayerCell("")}
				</div>
			</div>
		</div>
	);
}

function CaseL(){
	return(
		<div className="next-tetrimino-grid">
			<div className="grid-row">
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("L")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("L")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("L")}
					{ColoringPlayerCell("L")}
					{ColoringPlayerCell("")}
				</div>
			</div>
		</div>
	);
}

function CaseO(){
	return(
		<div className="next-tetrimino-grid">
			<div className="grid-row">
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("O")}
					{ColoringPlayerCell("O")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("O")}
					{ColoringPlayerCell("O")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
			</div>
		</div>
	);
}

function CaseS(){
	return(
		<div className="next-tetrimino-grid">
			<div className="grid-row">
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("S")}
					{ColoringPlayerCell("S")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("S")}
					{ColoringPlayerCell("S")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
			</div>
		</div>
	);
}

function CaseT(){
	return(
		<div className="next-tetrimino-grid">
			<div className="grid-row">
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("T")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("T")}
					{ColoringPlayerCell("T")}
					{ColoringPlayerCell("T")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
			</div>
		</div>
	);
}

function CaseZ(){
	return(
		<div className="next-tetrimino-grid">
			<div className="grid-row">
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("Z")}
					{ColoringPlayerCell("Z")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("Z")}
					{ColoringPlayerCell("Z")}
					{ColoringPlayerCell("")}
				</div>
				<div className="grid-column">
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
					{ColoringPlayerCell("")}
				</div>
			</div>
		</div>
	);
}

function CaseDefault(){
	return(
		<div className="next-tetrimino-grid">
			<div className="grid-row">
				<div className="grid-column">
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
				</div>
				<div className="grid-column">
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
				</div>
			</div>
		</div>
	);
}

//cf play_solo_demo.jsx L23 pour savoir comment appeler ;)
export function NextTetrimino(next_one){
	switch(next_one){
		case "I":
			return (
				<CaseI />
			);
		case "J":
			return (
				<CaseJ />
			);
		case "L":
			return (
				<CaseL />
			);
		case "O":
			return (
				<CaseO />
			);
		case "S":
			return (
				<CaseS />
			);
		case "T":
			return (
				<CaseT />
			);
		case "Z":
			return (
				<CaseZ />
			);
		default:
			return(
				<CaseDefault />
			);
	}
}