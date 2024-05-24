import React from "react";
// import { useParams } from "react-router-dom";
import { connect } from 'react-redux'

//functions
import { PlaySoloNormalDemoContainer } from "./demo/PlaySoloNormalDemoContainer";
import { PlaySoloHardDemoContainer } from "./demo/PlaySoloHardDemoContainer";
import { PlaySoloEasyDemoContainer } from "./demo/PlaySoloEasyDemoContainer";
import { PlayMultiDemoContainer } from "./demo/PlayMultiDemoContainer";
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


function PlayContainer(props){
	// let { gid } = useParams();

	// const [mode, setMode] = React.useState("");
	// on recup le mode à partir du gid dans le back

	switch(props.modeSelected){
		case SOLO_NORMAL:
			return(
				<PlaySoloNormalDemoContainer />
			);
		case SOLO_HARD:
			return(
				<PlaySoloHardDemoContainer />
			);
		case SOLO_EASY:
			return(
				<PlaySoloEasyDemoContainer />
			);
		case MULTI:
			// return(
			// 	<React.Fragment>
			// 		{WaitingRoomContainer("Multi")}
			// 	</React.Fragment>
			// );
			return(
				<PlayMultiDemoContainer />
			);
		case FRIEND:
			return(
				<React.Fragment>
					{WaitingRoomContainer("Friend")}
				</React.Fragment>
			);
		default:
			return(
				<SelectModeToPlayContainer />
			);
	}
}

const mapStateToProps = state => {
	console.log(state.mode.modeSelected)
    return {
        modeSelected: state.mode.modeSelected
    }
}

export default connect (
	mapStateToProps
)(PlayContainer)