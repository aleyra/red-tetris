import React from "react";
import { Link } from 'react-router-dom';

//css
import '../../css/Home.css'
//const

//function
import { Presentation } from "./Presentation";
import { OrangeColoredButton, PurpleColoredButton } from "../../components/buttons";

export function Home() {
	return(
		<React.Fragment>
			<div className="Menu">
				<div className="button">
					<Link to={"/SelectMode"}>
						<PurpleColoredButton
							variant="contained"
							disableRipple
							// sx={{ color: 'black'}}
						>
							Play
						</PurpleColoredButton>
					</Link>
				</div>
				<div className="button">
					{/* <Link to={"/Ranking"}> */}
						<OrangeColoredButton
							variant="contained"
							disableRipple
							// sx={{ color: 'black'}}
						>
							Ranking
						</OrangeColoredButton>
					{/* </Link> */}
				</div>

			</div>
			<div>
				<Presentation />
			</div>
		</React.Fragment>
	);
}