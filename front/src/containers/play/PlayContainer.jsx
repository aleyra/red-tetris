import React from "react";
import { useParams } from "react-router-dom";

//functions
import { PlaySoloNormalDemoContainer } from "./demo/PlaySoloNormalDemoContainer";
import { PlaySoloHardDemoContainer } from "./demo/PlaySoloHardDemoContainer";
import { PlaySoloEasyDemoContainer } from "./demo/PlaySoloEasyDemoContainer";
import { PlayMultiDemoContainer } from "./demo/PlayMultiDemoContainer";
import { SelectModeContainer } from "../select_mode/SelectModeContainer";
import { WaitingRoomContainer } from "./WaitingRoomContainer";

export function PlayContainer(){
	let { gid } = useParams();

	// const [mode, setMode] = React.useState("");
	// on recup le mode à partir du gid dans le back
	
	let mode = "Multi";

	switch(mode){
		case "SoloNormal":
			return(
				<PlaySoloNormalDemoContainer />
			);
		case "SoloHard":
			return(
				<PlaySoloHardDemoContainer />
			);
		case "SoloEasy":
			return(
				<PlaySoloEasyDemoContainer />
			);
		case "Multi":
			// return(
			// 	<React.Fragment>
			// 		{WaitingRoomContainer("Multi")}
			// 	</React.Fragment>
			// );
			return(
				<PlayMultiDemoContainer />
			);
		case "Friend":
			return(
				<React.Fragment>
					{WaitingRoomContainer("Friend")}
				</React.Fragment>
			);
		default:
			return(
				<SelectModeContainer />
			);
	}
}