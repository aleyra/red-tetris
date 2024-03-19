import React from "react";
import './css/App.css'
import CakeContainer from "./components/tuto_react_redux/CakeContainer";
// import HooksCakeContainer from "./components/tuto_react_redux/HooksCakeContainer";
// import IceCreamContainer from './components/tuto_react_redux/IceCreamContainer'

export default function TutoShop() {
	return(
		<div className="App">
			{/* <HooksCakeContainer /> */}
			<CakeContainer />
			{/* <IceCreamContainer /> */}
		</div>
	)
}
