import React from "react";

//const
import { CyanColoredButton } from "../../components/Buttons";
import { BlueColoredButton } from "../../components/Buttons";
import { OrangeColoredButton } from "../../components/Buttons";
import { YellowColoredButton } from "../../components/Buttons";
// import { GreenColoredButton } from "../../components/Buttons";
// import { PurpleColoredButton } from "../../components/buttons";
// import { RedColoredButton } from "../../components/buttons";

//functions
import OneRawRanking from "../../components/ranking/OneRawRanking";

//css
import '../../css/Ranking.css'

function RankingDisplayDemoContainer(){
	return(
		<React.Fragment>
			<div className="Ranking_list">
				{OneRawRanking("1", "Aleyra", "12345678")}
				{OneRawRanking("2", "mfunyu", "1234567")}
				{OneRawRanking("3", "Léto", "123456")}
				{OneRawRanking("4", "Lucille", "12345")}
			</div>
		</React.Fragment>
	);
}

export function RankingContainer(){
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

	
	function RankingSelectModeToPlayContainer(){
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

				</div>
			</React.Fragment>
		);
	}

	return(
		<React.Fragment>
			<RankingSelectModeToPlayContainer />
			<RankingDisplayDemoContainer />
			{/* {RankingDisplay(newMode)} */}
		</React.Fragment>
	);
}
