import React from "react";

//css
import './../../css/Play.css'

//function
import { Coloring_player_cell } from "./coloring_cell";

function CaseI(){
	return(
		<div className="next-tetrimino-grid">
			<div className="grid-row">
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("I")}
					{Coloring_player_cell("I")}
					{Coloring_player_cell("I")}
					{Coloring_player_cell("I")}
				</div>
				<div className="grid-column">
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
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("J")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("J")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("J")}
					{Coloring_player_cell("J")}
					{Coloring_player_cell("")}
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
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("L")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("L")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("L")}
					{Coloring_player_cell("L")}
					{Coloring_player_cell("")}
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
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("O")}
					{Coloring_player_cell("O")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("O")}
					{Coloring_player_cell("O")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
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
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("S")}
					{Coloring_player_cell("S")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("S")}
					{Coloring_player_cell("S")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
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
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("T")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("T")}
					{Coloring_player_cell("T")}
					{Coloring_player_cell("T")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
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
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("Z")}
					{Coloring_player_cell("Z")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("Z")}
					{Coloring_player_cell("Z")}
					{Coloring_player_cell("")}
				</div>
				<div className="grid-column">
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
					{Coloring_player_cell("")}
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
				</div>
				<div className="grid-column">
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
				</div>
			</div>
		</div>
	);
}

//cf play_solo_demo.jsx L23 pour savoir comment appeler ;)
export function Next_tetrimino(next_one){
	if (next_one === "I")
		return (
			<CaseI />
		);
	else if (next_one === "J")
		return (
			<CaseJ />
		);
	else if (next_one === "L")
		return (
			<CaseL />
		);
	else if (next_one === "O")
		return (
			<CaseO />
		);
	else if (next_one === "S")
		return (
			<CaseS />
		);
	else if (next_one === "T")
		return (
			<CaseT />
		);
	else if (next_one === "Z")
		return (
			<CaseZ />
		);
	else
		return(
			<CaseDefault />
		);
}