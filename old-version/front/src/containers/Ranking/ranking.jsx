import React from "react";

//const
import { CyanColoredButton } from "../../components/buttons";
import { BlueColoredButton } from "../../components/buttons";
import { OrangeColoredButton } from "../../components/buttons";
import { YellowColoredButton } from "../../components/buttons";
import { GreenColoredButton } from "../../components/buttons";
// import { PurpleColoredButton } from "../../components/buttons";
// import { RedColoredButton } from "../../components/buttons";

//css
import '../../css/Ranking.css'

//images
import GoldMedal from '../../images/gold.png'
import SilverMedal from '../../images/silver.png'
import BronzeMedal from '../../images/bronze.png'


function PositionRanking(position){
	switch(position){
		case '1':
			return(
				<img
					src={GoldMedal}
					alt="Gold Medal"
					className="Ranking_Medal"
				></img>
			);
		case '2':
			return(
				<img
					src={SilverMedal}
					alt="Silver Medal"
					className="Ranking_Medal"
				></img>
			);
		case '3':
			return(
				<img
					src={BronzeMedal}
					alt="Bronze Medal"
					className="Ranking_Medal"
				></img>
			);
		default:
			return(
				<React.Fragment></React.Fragment>
			);
	}
}

function OneRawRanking(position, name, score){
	if (position === "1" || position === "2" || position === "3")
		return(
			<div className="Ranking_raw">
				<div className="Ranking_position">
					{PositionRanking(position)}
				</div>
				<div className="Ranking_name_podium">
					{name}
				</div>
				<div className="Ranking_name_podium">
					{score}
				</div>
			</div>
		);
	else
		return(
			<div className="Ranking_raw">
				<div className="Ranking_position">
					{position}
				</div>
				<div className="Ranking_name">
					{name}
				</div>
				<div className="Ranking_name">
					{score}
				</div>
			</div>
		);
}

function RankingDisplayDemo(){
	return(
		<React.Fragment>
			<div className="Ranking_list">
				{OneRawRanking("1", "Aleyra", "12345678")}
				{OneRawRanking("2", "tmilon", "1234567")}
				{OneRawRanking("3", "Léto", "123456")}
				{OneRawRanking("4", "Lucille", "12345")}
			</div>
		</React.Fragment>
	);
}

export function Ranking(){
	const [newMode, setNewMode] = React.useState("");

	//on display le ranking avec le bon mode
	function RankingDisplay(mode){
		return(
			<React.Fragment>
				
			</React.Fragment>
		);
	}

	const handleClickSoloNormal = () => {
		setNewMode("SoloNormal");
	};

	const handleClickSoloEasy = () => {
		setNewMode("SoloEasy");
	};

	const handleClickSoloHard = () => {
		setNewMode("SoloHard");
	};

	const handleClickMulti = () => {
		setNewMode("Multi");
	};

	const handleClickFriend = () => {
		setNewMode("Friend");
	};
	
	function RankingSelectMode(){
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
								onClick={handleClickSoloNormal}
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
								onClick={handleClickSoloEasy}
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
								onClick={handleClickSoloHard}
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
								onClick={handleClickMulti}
							>
								Multiplayer Mode
							</BlueColoredButton>
						{/* </Link> */}
					</div>
					<div className="Ranking_button">
						{/* <Link to="/Ranking/"> */}
							<GreenColoredButton
								variant="contained"
								disableRipple
								sx={{ color: 'black'}}
								onClick={handleClickFriend}
							>
								Multiplayer Mode with a Friend
							</GreenColoredButton>
						{/* </Link> */}
					</div>
				</div>
			</React.Fragment>
		);
	}

	return(
		<React.Fragment>
			<RankingSelectMode />
			<RankingDisplayDemo />
			{/* {RankingDisplay(newMode)} */}
		</React.Fragment>
	);
}
