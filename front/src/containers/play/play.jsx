import React from "react";
import { useParams } from "react-router-dom";

//functions
import { PlaySoloNDemo } from "./play_soloN_demo";
import { PlaySoloHDemo } from "./play_soloH_demo";
import { PlaySoloEDemo } from "./play_soloE_demo";
import { PlayMultiDemo } from "./play_multi_mode";
import { SelectMode } from "../select_mode/select_mode";
import { WaitingRoom } from "./waiting_room";

export function Play(){
	let { gid } = useParams();

	// const [mode, setMode] = React.useState("");
	// on recup le mode à partir du gid dans le back
	
	let mode = "Multi";

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
			// return(
			// 	<React.Fragment>
			// 		{WaitingRoom("Multi")}
			// 	</React.Fragment>
			// );
			return(
				<PlayMultiDemo />
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