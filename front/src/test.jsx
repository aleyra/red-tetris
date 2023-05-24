import React from "react";
import { generatePath, useParams } from "react-router-dom";

export function Test2(){
	generatePath("/:gid", {gid: "1"});
	return(<div>ok</div>);
}

export function Test(){
	let { gid } = useParams();
	// const url = new URL(
	// 	`https://localhost:3000/#${gid}`
	//   );
	//   console.log(url.hash); // Logs: '#Examples'
	return(
		<React.Fragment>
			<div>{gid}</div>
		</React.Fragment>
	);
}