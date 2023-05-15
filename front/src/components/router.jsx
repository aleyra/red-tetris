import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//from our js
import { Select_Mode } from '../containers/select_mode/Select_mode';
import { NotFound } from '../containers/utils_functions/NotFound';
import { Presentation } from '../containers/home/Presentation';

export const router =
	<Router>
		<header>
			<Presentation />
		</header>
		<div className='Main-div'>
			<Routes>
				<Route path="/" element={<Select_Mode />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	</Router>