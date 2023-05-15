import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

//css
import './../css/App.css'

//const
// import { router } from '../components/router';

//functions
import { Select_Mode } from './select_mode/Select_mode';
import { NotFound } from './utils_functions/NotFound';
import { Presentation } from './home/Presentation';


export function App() {

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
			{/* <Router>
				<div className='Main-div'>
				<div style={{width: '100px'}}>{grid}</div>
				</div>
			</Router> */}
			<Select_Mode />
		</React.Fragment>
	);

	// return(
	// 	<React.Fragment>
	// 		<Router>
	// 			<div className='Main-div'>
	// 				<Routes>
	// 					<Route path="/SelectMode" element={<Select_Mode />} />
	// 					<Route path="/" element={<Presentation />} />
	// 					<Route path='*' element={<NotFound />} />
	// 				</Routes>
	// 			</div>
	// 		</Router>
	// 		{/* <Select_Mode /> */}
	// 	</React.Fragment>
	// );
}
