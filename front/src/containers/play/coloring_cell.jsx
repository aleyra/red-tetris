import React from "react";

//css
import './../../css/Play.css'

export function ColoringPlayerCell(cell){
	switch(cell){
		case "I":
			return(
				<div className="grid-tetriminoI"></div>
			);
		case "J":
			return(
				<div className="grid-tetriminoJ"></div>
			);
		case "L":
			return(
				<div className="grid-tetriminoL"></div>
			);
		case "O":
			return(
				<div className="grid-tetriminoO"></div>
			);
		case "S":
			return(
				<div className="grid-tetriminoS"></div>
			);
		case "T":
			return(
				<div className="grid-tetriminoT"></div>
			);
		case "Z":
			return(
				<div className="grid-tetriminoZ"></div>
			);
		case "X":
			return(
				<div className="grid-indestructible"></div>
			);
		default:
			return(
				<div className="grid-empty-square"></div>
			);
	}
}

export function ColoringOpponentCell(cell){
	switch(cell){
		case "I":
			return(
				<div className="opponent-game-grid-tetriminoI"></div>
			);
		case "J":
			return(
				<div className="opponent-game-grid-tetriminoJ"></div>
			);
		case "L":
			return(
				<div className="opponent-game-grid-tetriminoL"></div>
			);
		case "O":
			return(
				<div className="opponent-game-grid-tetriminoO"></div>
			);
		case "S":
			return(
				<div className="opponent-game-grid-tetriminoS"></div>
			);
		case "T":
			return(
				<div className="opponent-game-grid-tetriminoT"></div>
			);
		case "Z":
			return(
				<div className="opponent-game-grid-tetriminoZ"></div>
			);
		case "X":
			return(
				<div className="opponent-game-grid-indestructible"></div>
			);
		default:
			return(
				<div className="opponent-game-grid-empty-square"></div>
			);
	}
}