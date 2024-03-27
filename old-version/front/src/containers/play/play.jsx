import React from "react";
import { useParams } from "react-router-dom";

//functions
import { PlaySoloNormalDemoContainer } from "./play_soloN_demo";
import { PlaySoloHardDemo } from "./play_soloH_demo";
import { PlaySoloEasyDemo } from "./play_soloE_demo";
import { SelectMode } from "../select_mode/select_mode";
import { WaitingRoomContainer } from "./waiting_room";

export function Play(){
	let { gid } = useParams();

	// const [mode, setMode] = React.useState("");
	// on recup le mode à partir du gid dans le back
	
	let mode = "Friend";

	switch(mode){
		case "SoloNormal":
			return(
				<PlaySoloNormalDemoContainer />
			);
		case "SoloHard":
			return(
				<PlaySoloHardDemo />
			);
		case "SoloEasy":
			return(
				<PlaySoloEasyDemo />
			);
		case "Multi":
			return(
				<React.Fragment>
					{WaitingRoomContainer("Multi")}
				</React.Fragment>
			);
		case "Friend":
			return(
				<React.Fragment>
					{WaitingRoomContainer("Friend")}
				</React.Fragment>
			);
		default:
			return(
				<SelectMode />
			);
	}
}