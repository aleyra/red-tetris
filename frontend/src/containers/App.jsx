import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//css
import './../css/App.css'

//const
// import { router } from '../components/router';

//functions
import { Select_Mode } from './select_mode/Select_mode';
import { NotFound } from './utils_functions/NotFound';
import { Presentation } from './home/Presentation';


export function App() {
	return(
		<React.Fragment>
			<Router>
				<div className='Main-div'>
					<Routes>
						<Route path="/SelectMode" element={<Select_Mode />} />
						<Route path="/" element={<Presentation />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</Router>
			{/* <Select_Mode /> */}
		</React.Fragment>
	);
}

// export function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
