import { configureStore } from '@reduxjs/toolkit'
// import { composeWithDevTools } from '@redux-devtools/extension';

import rankingSoloNormalReducer from "./ranking/solo_normal_mode/rankingSoloNormalReducer";
import modeReducer from "./mode/modeReducer";

export function setupStore() {
	return configureStore({
		reducer: {
			//ranking
			// rankingSoloNormal: rankingSoloNormalReducer,
			//selectMode
			selectMode: modeReducer
		}
	});
}
