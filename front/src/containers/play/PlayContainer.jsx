import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//redux actions
// import { updateMode } from "../../redux/mode/mode";

//functions
import { PlaySoloNormalDemoContainer } from "./demo/PlaySoloNormalDemoContainer";
// import { PlaySoloNormalContainer } from "./PlaySoloNormalContainer";
import { PlaySoloHardDemoContainer } from "./demo/PlaySoloHardDemoContainer";
// import { PlaySoloHardContainer } from "./PlaySoloHardContainer";
import { PlaySoloEasyDemoContainer } from "./demo/PlaySoloEasyDemoContainer";
// import { PlaySoloEasyContainer } from "./PlaySoloEasyContainer";
// import { PlayMultiDemoContainer } from "./demo/PlayMultiDemoContainer";
import SelectModeToPlayContainer from "./SelectModeToPlayContainer";
import { WaitingRoomContainer } from "./WaitingRoomContainer";

//const
import { 
    SOLO_EASY,
    SOLO_HARD,
    SOLO_NORMAL,
    MULTI,
	FRIEND
} from '../../components/ConstString';


function PlayContainer(){

	// const dispatch = useDispatch();
	const modeSelected = useSelector((state) => state.mode.modeSelected);

	switch(modeSelected){
		case SOLO_NORMAL:
			return(
				<PlaySoloNormalDemoContainer />
				// <PlaySoloNormalContainer />
			);
		case SOLO_HARD:
			return(
				<PlaySoloHardDemoContainer />
				// <PlaySoloHardContainer />
			);
		case SOLO_EASY:
			return(
				<PlaySoloEasyDemoContainer />
				// <PlaySoloEasyContainer />
			);
		case MULTI:
			return(
				<React.Fragment>
					<WaitingRoomContainer />
					{/* <PlayMultiDemoContainer /> */}
				</React.Fragment>
			);
		case FRIEND:
			return(
				<React.Fragment>
					<WaitingRoomContainer />
				</React.Fragment>
			);
		default:
			return(
				<SelectModeToPlayContainer />
			);
	}
}

export default PlayContainer