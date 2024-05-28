import React, {useState} from "react";
import { connect, useDispatch, useSelector } from "react-redux";

//redux actions
import { selectMode } from "../../redux/mode/modeActions";
// import { rankMulti } from "../../redux/ranking/multi_mode/rankingMultiActions";
// import { rankSoloEasy } from "../../redux/ranking/solo_easy_mode/rankingSoloEasyActions";
// import { rankSoloHard } from "../../redux/ranking/solo_hard_mode/rankingSoloHardActions";
// import { rankSoloNormal } from "../../redux/ranking/solo_normal_mode/rankingSoloNormalActions";

import { orderNormal } from "../../redux/ranking/rankingSoloNormal"
import { orderEasy } from "../../redux/ranking/rankingSoloEasy"
import { orderHard } from "../../redux/ranking/rankingSoloHard"
import { orderMulti } from "../../redux/ranking/rankingMulti"

import { update } from "../../redux/mode/mode"

// import { addRank } from "../../redux/ranking/ranking"

//css
import '../../css/Ranking.css'

//const
import { 
    CyanColoredButton,
    BlueColoredButton,
    OrangeColoredButton,
    YellowColoredButton
} from "../../components/Buttons";
import { 
    SOLO_EASY,
    SOLO_HARD,
    SOLO_NORMAL,
    MULTI,
} from '../../components/ConstString';

// //functions
import OneRawRanking from "../../components/ranking/OneRawRanking";

// function RankingDisplayDemoContainer(){
// 	return(
// 		<React.Fragment>
// 			<div className="Ranking_list">
// 				{OneRawRanking("1", "Aleyra", "12345678")}
// 				{OneRawRanking("2", "Yuu", "1234567")}
// 				{OneRawRanking("3", "Benjamin", "123456")}
// 				{OneRawRanking("4", "Lucille", "12345")}
// 			</div>
// 		</React.Fragment>
// 	);
// }

export function RankingContainer(props){
	//on display le ranking avec le bon mode
	console.log("zut")
	const dispatch = useDispatch()
	// const ranking = useSelector((state) => state.rankingSoloNormal.ranking)
	// dispatch(orderNormal())
	function RankingDisplay(props){
		// let ranking = [];
		// ranking = 
		// switch(props.modeSelected){
		// 	case SOLO_NORMAL:
		// 		ranking = props.rankingSoloNormal;
		// 		break;
		// 	case SOLO_HARD:
		// 		ranking = props.rankingSoloHard;
		// 		break;
		// 	case SOLO_EASY:
		// 		ranking = props.rankingSoloEasy;
		// 		break;
		// 	case MULTI:
		// 		ranking = props.rankingMulti;
		// 		break;
		// 	default:
		// 		ranking = [];
		// }
		const modeSelected = useSelector((state) => state.mode.modeSelected)
		const [currentRanking, setCurrentRanking] = useState([]);
		const rankingEasy = useSelector((state) => state.rankingSoloEasy.ranking)
		const rankingNormal = useSelector((state) => state.rankingSoloNormal.ranking)
		const rankingHard = useSelector((state) => state.rankingSoloHard.ranking)
		const rankingMulti = useSelector((state) => state.rankingMulti.ranking)

		React.useEffect(() => {
			switch(modeSelected) {
				case SOLO_EASY:
					dispatch(orderEasy())
					setCurrentRanking(rankingEasy)
					break;
				case SOLO_NORMAL:
					dispatch(orderNormal())
					setCurrentRanking(rankingNormal)
					break;
				case SOLO_HARD:
					dispatch(orderHard())
					setCurrentRanking(rankingHard)
					break;
				case MULTI:
					dispatch(orderMulti())
					setCurrentRanking(rankingMulti)
					break;
				default:
					setCurrentRanking([])
			}
		}, [modeSelected])
		
		// switch(modeSelected) {
		// 	case SOLO_EASY:
		// 		ranking = useSelector((state) => state.rankingSoloEasy.ranking)
		// 		dispatch(orderEasy())
		// 		break;
		// 	case SOLO_NORMAL:
		// 		ranking = useSelector((state) => state.rankingSoloNormal.ranking)
		// 		dispatch(orderNormal())
		// 		break;
		// 	case SOLO_HARD:
		// 		ranking = useSelector((state) => state.rankingSoloHard.ranking)
		// 		dispatch(orderHard())
		// 		break;
		// 	case MULTI:
		// 		ranking = useSelector((state) => state.rankingMulti.ranking)
		// 		dispatch(orderMulti())
		// 		break;
		// 	default:
		// 		ranking = []
		// }
		console.log("modeSelected " + modeSelected)
		return(
			<React.Fragment>
				<div className="Ranking_list">
					{/* {ranking.map((player, i) => (
						OneRawRanking(i+1, player.name, player.score)
					))} */}
					{modeSelected}
					{currentRanking.map((ranking) => (<div>
						{`${ranking.name} ${ranking.score}`}
					</div>))}
				</div>
			</React.Fragment>
		);
	}
	
	function RankingSelectModeToPlayContainer(){
		// const [mode, setMode] = React.useState("");
		return(
			<React.Fragment>
				<h1>Ranking</h1>
				<div className="Ranking_select_mode">
					<div className="Ranking_button">
						{/* <Link to="/Ranking/"> */}
							<CyanColoredButton
								variant="contained"
								disableRipple
								sx={{ color: 'black'}}
								// onClick={() => props.selectMode(SOLO_NORMAL)}
								onClick={() => {
									console.log("click0")
									dispatch(update(SOLO_NORMAL))
								}}
							>
								Solo Normal Mode
							</CyanColoredButton>
						{/* </Link> */}
					</div>
					<div className="Ranking_button">
						{/* <Link to="/Ranking/"> */}
							<OrangeColoredButton
								variant="contained"
								disableRipple
								// onClick={() => props.selectMode(SOLO_EASY)}
								onClick={() => {
									console.log("click1")
									dispatch(update(SOLO_EASY))}}
							>
								Solo Easy Mode
							</OrangeColoredButton>
						{/* </Link> */}
					</div>
					<div className="Ranking_button">
						{/* <Link to="/Ranking/"> */}
							<YellowColoredButton
								variant="contained"
								disableRipple
								sx={{ color: 'black'}}
								// onClick={() => props.selectMode(SOLO_HARD)}
								onClick={() => {
									console.log("click2")
									dispatch(update(SOLO_HARD))
								}}
							>
								Solo Hard Mode
							</YellowColoredButton>
						{/* </Link> */}
					</div>
					<div className="Ranking_button">
						{/* <Link to="/Ranking/"> */}
							<BlueColoredButton
								variant="contained"
								disableRipple
								// onClick={() => props.selectMode(MULTI)}
								onClick={() => {
									console.log("click3")
									dispatch(update(MULTI))
								}}
							>
								Multiplayer Mode
							</BlueColoredButton>
						{/* </Link> */}
					</div>

				</div>
			</React.Fragment>
		);
	}

	return(
		<React.Fragment>
			<RankingSelectModeToPlayContainer />
			<RankingDisplay />
		</React.Fragment>
	);
}

const mapStateToProps = state => {
	return {
		modeSelected: state.mode.modeSelected,
		// rankingSoloNormal: state.rankingSoloNormal,
		// rankingSoloHard: state.rankingSoloHard,
		// rankingSoloEasy: state.rankingSoloEasy,
		// rankingMulti: state.rankingMulti,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectMode: mode => dispatch(selectMode(mode)),
		// rankMulti: (name, score) => dispatch(rankMulti(name, score)),
		// rankSoloEasy: (name, score) => dispatch(rankSoloEasy(name, score)),
		// rankSoloHard: (name, score) => dispatch(rankSoloHard(name, score)),
		// rankSoloNormal: (name, score) => dispatch(rankSoloNormal(name, score)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RankingContainer);
