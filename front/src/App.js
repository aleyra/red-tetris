import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, HashRouter, Link} from 'react-router-dom';
import socketIOClient from "socket.io-client";

//css
import './css/App.css'

//functions
import { Home } from './containers/home/home';
import { NotFound } from './containers/utils_functions/not_found';
import { PlayFriendDemo } from './containers/play/play_friend_mode';
import { PlaySoloEDemo } from './containers/play/play_soloE_demo';
import { PlaySoloHDemo } from './containers/play/play_soloH_demo';
import { PlaySoloNDemo } from './containers/play/play_soloN_demo';
import { PlayMultiDemo } from './containers/play/play_multi_mode';
import { Ranking } from './containers/Ranking/ranking';
import { SelectMode } from './containers/select_mode/select_mode';
import { WaitingRoom } from './containers/play/waiting_room';
import { Test, Test2 } from './test';


const ENDPOINT = "http://localhost:4001";

export default function App() {

	/*
	const[grid, setGrid] = useState("");
	*/

	/*
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
	*/

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

	/*
	const detectKeyDown = (e) => {
		const socket = socketIOClient(ENDPOINT);
		socket.emit("keydown", e.key);
		console.log(e.key);
	}
	*/


	return(
		<React.Fragment>
			{/* <Router>
				<div className='Main-div'>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/SelectMode" element={<SelectMode />} />
						<Route path="/Demo-SoloN" element={<PlaySoloNDemo />} />
						<Route path="/Demo-SoloE" element={<PlaySoloEDemo />} />
						<Route path="/Demo-SoloH" element={<PlaySoloHDemo />} />
						<Route path="/Demo-Multi" element={<PlayMultiDemo />} />
						<Route path="/Demo-Friend" element={<PlayFriendDemo />} />
						<Route path='/Ranking' element={<Ranking />} />
						<Route path='/Waiting-Room'>
							<Route path=':wrid' element={<WaitingRoom />} />
						</Route>
						<Route path='*' element={<NotFound />} />
						<Route path='/test'>
							<Route path=':gid'  element={<Test />} />
						</Route>
					</Routes>
				</div>
			</Router> */}
			{/* <HashRouter
				basename='/'
				hashType="noslash"
			>
				<Test />
			</HashRouter> */}
			<HashRouter>
				<div className='Main-div'>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/SelectMode" element={<SelectMode />} />
						<Route path="/Demo-SoloN" element={<PlaySoloNDemo />} />
						<Route path="/Demo-SoloE" element={<PlaySoloEDemo />} />
						<Route path="/Demo-SoloH" element={<PlaySoloHDemo />} />
						<Route path="/Demo-Multi" element={<PlayMultiDemo />} />
						<Route path="/Demo-Friend" element={<PlayFriendDemo />} />
						<Route path='/Ranking' element={<Ranking />} />
						<Route path='/Waiting-Room'>
							<Route path=':wrid' element={<WaitingRoom />} />
						</Route>
							{/* <Route path=':gid'  element={<Test />} /> */}
						<Route path='/test' element={<Test2 />} />
						<Route path=':gid' element={<Test />} />
						<Route element={<NotFound />} />
					</Routes>
				</div>
				<div>
					<Link to='1'>bouh</Link>
				</div>
			</HashRouter>
		</React.Fragment>
	);
}
