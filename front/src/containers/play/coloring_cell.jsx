import React from "react";

//css
import './../../css/Play.css'

function PCaseI(){
	return(
		<div className="grid-tetriminoI"></div>
	);
}

function PCaseJ(){
	return(
		<div className="grid-tetriminoJ"></div>
	);
}

function PCaseL(){
	return(
		<div className="grid-tetriminoL"></div>
	);
}

function PCaseO(){
	return(
		<div className="grid-tetriminoO"></div>
	);
}

function PCaseS(){
	return(
		<div className="grid-tetriminoS"></div>
	);
}

function PCaseT(){
	return(
		<div className="grid-tetriminoT"></div>
	);
}

function PCaseZ(){
	return(
		<div className="grid-tetriminoZ"></div>
	);
}

function PCaseEmpty(){
	return(
		<div className="grid-empty-square"></div>
	);
}

function PCaseIndestructible(){
	return(
		<div className="grid-indestructible"></div>
	);
}

export function ColoringPlayerCell(cell){
	if (cell === "I")
		return (
			<PCaseI />
		);
	else if (cell === "J")
		return (
			<PCaseJ />
		);
	else if (cell === "L")
		return (
			<PCaseL />
		);
	else if (cell === "O")
		return (
			<PCaseO />
		);
	else if (cell === "S")
		return (
			<PCaseS />
		);
	else if (cell === "T")
		return (
			<PCaseT />
		);
	else if (cell === "Z")
		return (
			<PCaseZ />
		);
	else if (cell === "X")
		return (
			<PCaseIndestructible />
		);
	else
		return(
			<PCaseEmpty />
		);
}

function OCaseI(){
	return(
		<div className="opponent-game-grid-tetriminoI"></div>
	);
}

function OCaseJ(){
	return(
		<div className="opponent-game-grid-tetriminoJ"></div>
	);
}

function OCaseL(){
	return(
		<div className="opponent-game-grid-tetriminoL"></div>
	);
}

function OCaseO(){
	return(
		<div className="opponent-game-grid-tetriminoO"></div>
	);
}

function OCaseS(){
	return(
		<div className="opponent-game-grid-tetriminoS"></div>
	);
}

function OCaseT(){
	return(
		<div className="opponent-game-grid-tetriminoT"></div>
	);
}

function OCaseZ(){
	return(
		<div className="opponent-game-grid-tetriminoZ"></div>
	);
}

function OCaseEmpty(){
	return(
		<div className="opponent-game-grid-empty-square"></div>
	);
}

function OCaseIndestructible(){
	return(
		<div className="opponent-game-grid-indestructible"></div>
	);
}

export function ColoringOpponentCell(cell){
	if (cell === "I")
		return (
			<OCaseI />
		);
	else if (cell === "J")
		return (
			<OCaseJ />
		);
	else if (cell === "L")
		return (
			<OCaseL />
		);
	else if (cell === "O")
		return (
			<OCaseO />
		);
	else if (cell === "S")
		return (
			<OCaseS />
		);
	else if (cell === "T")
		return (
			<OCaseT />
		);
	else if (cell === "Z")
		return (
			<OCaseZ />
		);
	else if (cell === "X")
		return (
			<OCaseIndestructible />
		);
	else
		return(
			<OCaseEmpty />
		);
}