import React from "react";

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

export default PositionRanking