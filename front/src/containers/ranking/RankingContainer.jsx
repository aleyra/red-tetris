import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

//redux actions
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


export function RankingContainer(){
	//on display le ranking avec le bon mode
	const dispatch = useDispatch()

	function RankingDisplay(){

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
		}, [modeSelected, rankingEasy, rankingHard, rankingMulti, rankingNormal])
		
		return(
			<React.Fragment>
				<div className="Ranking_list">
					{currentRanking.map((player, i = 1) => (
						OneRawRanking(i + 1, player.name, player.score)
					))}

				</div>
			</React.Fragment>
		);
	}
	
	function RankingSelectModeToPlayContainer(){
		return(
			<React.Fragment>
				<h1>Ranking</h1>
				<div className="Ranking_select_mode">
					<div className="Ranking_button">
							<CyanColoredButton
								variant="contained"
								disableRipple
								sx={{ color: 'black'}}
								onClick={() => {
									dispatch(update(SOLO_NORMAL))
								}}
							>
								Solo Normal Mode
							</CyanColoredButton>
					</div>
					<div className="Ranking_button">
							<OrangeColoredButton
								variant="contained"
								disableRipple
								onClick={() => {
									dispatch(update(SOLO_EASY))}}
							>
								Solo Easy Mode
							</OrangeColoredButton>
					</div>
					<div className="Ranking_button">
							<YellowColoredButton
								variant="contained"
								disableRipple
								sx={{ color: 'black'}}
								onClick={() => {
									dispatch(update(SOLO_HARD))
								}}
							>
								Solo Hard Mode
							</YellowColoredButton>
					</div>
					<div className="Ranking_button">
							<BlueColoredButton
								variant="contained"
								disableRipple
								onClick={() => {
									dispatch(update(MULTI))
								}}
							>
								Multiplayer Mode
							</BlueColoredButton>
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

export default RankingContainer;
