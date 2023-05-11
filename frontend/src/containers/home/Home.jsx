import React from "react";
import { Link } from 'react-router-dom';

//css

//const

//function
import { Presentation } from "./Presentation";

export function Home() {
	return(
		<React.Fragment>
			<div>
				<Presentation />
			</div>
			<div>
				<Link to={"/SelectMode"}>
					Select mode to play
				</Link>
			</div>
			<div>
				{/* <Link to={""}> */}
					Ranking
				{/* </Link> */}
			</div>
		</React.Fragment>
	);
}