import React from "react";
import './css/App.css'
import CakeContainer from "./components/tuto_react_redux/CakeContainer";
import HooksCakeContainer from "./components/tuto_react_redux/HooksCakeContainer";
import IceCreamContainer from './components/tuto_react_redux/IceCreamContainer'
import NewCakeContainer from "./components/tuto_react_redux/NewCakeContainer";
import ItemContainer from "./components/tuto_react_redux/ItemContainer";
import UserContainer from "./components/tuto_react_redux/UserContainer";

export default function TutoShop() {
	return(
		<div className="App">
			<UserContainer />
			{/* <ItemContainer cake />
			<ItemContainer />
			<HooksCakeContainer />
			<CakeContainer />
			<IceCreamContainer />
			<NewCakeContainer /> */}
		</div>
	)
}
