import React, { useState, useEffect } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom';
import socketIOClient from "socket.io-client";

//css
import './css/App.css'

//functions
import { Home } from './containers/home/home';
import { NotFound } from './containers/utils_functions/not_found';
import { Ranking } from './containers/Ranking/ranking';
import { SelectMode } from './containers/select_mode/select_mode';
import { Play } from './containers/play/play';


const ENDPOINT = "http://localhost:4001";

export default function App() {

	const[grid, setGrid] = useState("");

	useEffect(() => {
		const socket = socketIOClient(ENDPOINT);
		socket.emit("startGame");
		socket.on("gameData", data => {
			console.log("Server answered with data to start game!");
			setGrid(data);
			console.log(data);
		});
		document.addEventListener('keydown', detectKeyDown, true);
	}, []);

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

	const detectKeyDown = (e) => {
		const socket = socketIOClient(ENDPOINT);
		socket.emit("keydown", e.key);
		console.log(e.key);
	}

	return(
		<React.Fragment>
			<HashRouter>
				<div className='Main-div'>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/SelectMode" element={<SelectMode />} />
						<Route path='/Ranking' element={<Ranking />} />
						<Route path=':gid' element={<Play />} />
						<Route element={<NotFound />} />
					</Routes>
				</div>
			</HashRouter>
		</React.Fragment>
	);
}
