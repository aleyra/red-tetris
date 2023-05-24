import React from "react";
import { PlaySoloNDemo } from "./play_soloN_demo";
import { SelectMode } from "../select_mode/select_mode";
import { useParams } from "react-router-dom";
import { PlaySoloHDemo } from "./play_soloH_demo";
import { PlaySoloEDemo } from "./play_soloE_demo";
import { WaitingRoom } from "./waiting_room";

export function Play(){
	let { gid } = useParams();

	// const [mode, setMode] = React.useState("");
	// on recup le mode à partir du gid dans le back
	
	let mode = "Friend";

	switch(mode){
		case "SoloNormal":
			return(
				<PlaySoloNDemo />
			);
		case "SoloHard":
			return(
				<PlaySoloHDemo />
			);
		case "SoloEasy":
			return(
				<PlaySoloEDemo />
			);
		case "Multi":
			return(
				<React.Fragment>
					{WaitingRoom("Multi")}
				</React.Fragment>
			);
		case "Friend":
			return(
				<React.Fragment>
					{WaitingRoom("Friend")}
				</React.Fragment>
			);
		default:
			return(
				<SelectMode />
			);
	}
}