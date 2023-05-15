import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import socketIOClient from "socket.io-client";

//css
import './css/App.css'

//const
// import { router } from '../components/router';

//functions
import { Home } from './containers/home/Home';
import { NotFound } from './containers/utils_functions/NotFound';
import { Play_solo_demo } from './containers/play/play_solo_demo';
import { Play_multi_demo } from './containers/play/play_multi_mode';
import { Select_Mode } from './containers/select_mode/Select_mode';

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
			<Router>
				<div className='Main-div'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/SelectMode" element={<Select_Mode />} />
            <Route path="/Demo-Solo" element={<Play_solo_demo />} />
            <Route path="/Demo-Multi" element={<Play_multi_demo />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</React.Fragment>
	);
}
