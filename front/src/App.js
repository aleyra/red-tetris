import React, { useState, useEffect } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom';

import socketIOClient from "socket.io-client";

//css
import './css/App.css'

//functions
import { HomeContainer } from './containers/home/HomeContainer';
import { NotFoundContainer } from './containers/tools_containers/NotFoundContainer';
import { RankingContainer } from './containers/ranking/RankingContainer';
import SelectModeToPlayContainer from './containers/play/SelectModeToPlayContainer';
import PlayContainer from './containers/play/PlayContainer';

//React Redux
import { Provider } from 'react-redux';
import store from './redux/store';

/* from ex-teammate block begin */
// const ENDPOINT = "http://localhost:4001";
/* from ex-teammate block end */

export default function App() {

	/* from ex-teammate block begin */
	// const[grid, setGrid] = useState("");

	// useEffect(() => {
	// 	const socket = socketIOClient(ENDPOINT);
	// 	socket.emit("startGame");
	// 	socket.on("gameData", data => {
	// 		console.log("Server answered with data to start game!");
	// 		setGrid(data);
	// 		console.log(data);
	// 	});
	// 	document.addEventListener('keydown', detectKeyDown, true);
	// }, []);

	// more advanced version with id handling, still WIP
	// useEffect(() => {
	// 	const socket = socketIOClient(ENDPOINT);
	// 	const cookieValue = document.cookie.split("; ").find((row) => row.startsWith("playerId="))?.split("=")[1];
	// 	var id = cookieValue ? cookieValue : Math.floor(Math.random() * 1000000);
	// 	console.log("Cookie is " + id);
	// 	document.cookie = "playerId=" + id + "; SameSite=None; Secure";
	// 	socket.emit("startGame1", id);
	// 	socket.on("startGame2", data => {
	// 		console.log("Server answered with data to start game!");
	// 		console.log(data);
	// 	});
	// 	document.addEventListener('keydown', detectKeyDown, true);
	//   }, []);

	// const detectKeyDown = (e) => {
	// 	const socket = socketIOClient(ENDPOINT);
	// 	socket.emit("keydown", e.key);
	// 	console.log(e.key);
	// }
	/* from ex-teammate block end */

	return(
		<React.Fragment>
			<Provider store={store}>
				<HashRouter>
					<div className='Main-div'>
						<Routes>
							<Route exact path="/" element={<HomeContainer />} />
							<Route path="/SelectModeToPlayContainer" element={<SelectModeToPlayContainer />} />
							<Route path='/Ranking' element={<RankingContainer />} />
							<Route path='/PlayContainer' element={<PlayContainer />} />{/* to change */}
							<Route element={<NotFoundContainer />} />
						</Routes>
					</div>
				</HashRouter>
			</Provider>
		</React.Fragment>
	);
}
