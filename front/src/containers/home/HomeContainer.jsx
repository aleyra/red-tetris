import React from "react";
import { Link } from 'react-router-dom';

//css
import '../../css/Home.css'
//const

//function
import { StudPresentationContainer } from "./StudPresentationContainer";
import { OrangeColoredButton, PurpleColoredButton } from "../../components/Buttons";

export function HomeContainer() {
	return(
		<React.Fragment>
			<div className="Home-Menu">
				<div className="Home-Button">
					<Link to={"/SelectModeToPlayContainer"}>
						<PurpleColoredButton
							variant="contained"
							disableRipple
						>
							Play
						</PurpleColoredButton>
					</Link>
				</div>
				<div className="Home-Button">
					<Link to={"/Ranking"}>
						<OrangeColoredButton
							variant="contained"
							disableRipple
						>
							Ranking
						</OrangeColoredButton>
					</Link>
				</div>

			</div>
			<div>
				<StudPresentationContainer />
			</div>
			{/* React Redux Tutorial block begin */}
			{/* <div className="Home-Button">
				<Link to={"/CakeShop"}>
					<OrangeColoredButton
						variant="contained"
						disableRipple
					>
						CakeShop From React Redux Tutorial
					</OrangeColoredButton>
				</Link>
			</div> */}
			{/* React Redux Tutorial block end */}
		</React.Fragment>
	);
}