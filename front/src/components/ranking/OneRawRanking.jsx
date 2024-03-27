import React from "react";

//functions
import PositionRanking from "./PositionRanking";

//css
import '../../css/Ranking.css'

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

export default OneRawRanking