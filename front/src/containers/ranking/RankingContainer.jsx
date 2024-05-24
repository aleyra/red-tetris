import React from "react";
import { connect } from "react-redux";

//redux actions
import { selectMode } from "../../redux/mode/modeActions";
import { rankMulti } from "../../redux/ranking/multi_mode/rankingMultiActions";
import { rankSoloEasy } from "../../redux/ranking/solo_easy_mode/rankingSoloEasyActions";
import { rankSoloHard } from "../../redux/ranking/solo_hard_mode/rankingSoloHardActions";
import { rankSoloNormal } from "../../redux/ranking/solo_normal_mode/rankingSoloNormalActions";

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
	function RankingDisplay(props){
		let ranking = [];
		switch(props.modeSelected){
			case SOLO_NORMAL:
				ranking = props.rankingSoloNormal;
				break;
			case SOLO_HARD:
				ranking = props.rankingSoloHard;
				break;
			case SOLO_EASY:
				ranking = props.rankingSoloEasy;
				break;
			case MULTI:
				ranking = props.rankingMulti;
				break;
			default:
				ranking = [];
			return(
				<React.Fragment>
					<div className="Ranking_list">
						{/* for each player in rankingSoloNormal in store display its name and its score */
						ranking.map((player, i) => (
							OneRawRanking(i+1, player.name, player.score)
						))
						}
					</div>
				</React.Fragment>
			);
		}
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
								onClick={() => props.selectMode(SOLO_NORMAL)}
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
								onClick={() => props.selectMode(SOLO_EASY)}
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
								onClick={() => props.selectMode(SOLO_HARD)}
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
								onClick={() => props.selectMode(MULTI)}
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
		rankingSoloNormal: state.rankingSoloNormal,
		rankingSoloHard: state.rankingSoloHard,
		rankingSoloEasy: state.rankingSoloEasy,
		rankingMulti: state.rankingMulti,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectMode: mode => dispatch(selectMode(mode)),
		rankMulti: score => dispatch(rankMulti(score)),
		rankSoloEasy: score => dispatch(rankSoloEasy(score)),
		rankSoloHard: score => dispatch(rankSoloHard(score)),
		rankSoloNormal: score => dispatch(rankSoloNormal(score)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RankingContainer);
