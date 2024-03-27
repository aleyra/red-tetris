import React, { useState, useEffect } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom';
import socketIOClient from "socket.io-client";

//css
import './css/App.css'

//functions
import { HomeContainer } from './containers/home/HomeContainer';
import { NotFound } from './containers/utils_functions/not_found';
import { RankingContainer } from './containers/ranking/RankingContainer';
import { SelectMode } from './containers/select_mode/select_mode';
import { PlayContainer } from './containers/play/PlayContainer';

//React Redux Tutorial
import { Provider } from 'react-redux';
import TutoShop from './tuto_shop';
import store from './redux/tuto/store';

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
							<Route path="/SelectMode" element={<SelectMode />} />
							<Route path='/Ranking' element={<RankingContainer />} />
							<Route path=':gid' element={<PlayContainer />} />
							<Route element={<NotFound />} />
							{/* React Redux Tutorial block begin */}
							{/* <Route path='/CakeShop' element={<TutoShop />} /> */}
							{/* React Redux Tutorial block end */}
						</Routes>
					</div>
				</HashRouter>
			</Provider>
		</React.Fragment>
	);
}
