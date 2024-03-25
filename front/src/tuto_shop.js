import React from "react";
import './css/App.css'
import CakeContainer from "./components/tuto_react_redux/CakeContainer";
import HooksCakeContainer from "./components/tuto_react_redux/HooksCakeContainer";
import IceCreamContainer from './components/tuto_react_redux/IceCreamContainer'
import NewCakeContainer from "./components/tuto_react_redux/NewCakeContainer";
import ItemContainer from "./components/tuto_react_redux/ItemContainer";

export default function TutoShop() {
	return(
		<div className="App">
			<ItemContainer cake />
			<ItemContainer />
			<HooksCakeContainer />
			<CakeContainer />
			<IceCreamContainer />
			<NewCakeContainer />
		</div>
	)
}
