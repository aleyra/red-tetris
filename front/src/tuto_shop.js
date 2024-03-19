import React from "react";
import { Provider } from 'react-redux'
import store from "./redux/store";
import './css/App.css'
import CakeContainer from "./components/tuto_react_redux/CakeContainer";
import HooksCakeContainer from "./components/tuto_react_redux/HooksCakeContainer";
import IceCreamContainer from './components/tuto_react_redux/IceCreamContainer'

function TutoShop() {
	return(
		<Provider store={store}>
			<div className="App">
				<HooksCakeContainer />
				<CakeContainer />
				<IceCreamContainer />
			</div>
		</Provider>
	)
}

export default TutoShop