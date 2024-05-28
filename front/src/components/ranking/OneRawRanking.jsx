import React from "react";

//functions
import PositionRanking from "./PositionRanking";

//css
import '../../css/Ranking.css'

function OneRawRanking(position, name, score){
	const key_rank = position + " rank"
	if (position === 1 || position === 2 || position === 3)
		return(
			<div className="Ranking_raw" key={key_rank} >
				<div className="Ranking_position" key={position}>
					{PositionRanking(position)}
				</div>
				<div className="Ranking_name_podium" key={name}>
					{name}
				</div>
				<div className="Ranking_name_podium" key={score}>
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