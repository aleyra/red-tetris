import React from "react";
import { Link } from 'react-router-dom';

//css
import '../../css/Home.css'
//const

//function
import { Presentation } from "./presentation";
import { OrangeColoredButton, PurpleColoredButton } from "../../components/buttons";

export function Home() {
	return(
		<React.Fragment>
			<div className="Home-Menu">
				<div className="Home-Button">
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
				<div className="Home-Button">
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