import { configureStore } from '@reduxjs/toolkit';

import modeSlice from "./slicers/mode";
import playerSlice from './slicers/player';
import rankingMultiSlice from "./slicers/ranking/rankingMulti";
import rankingSoloEasySlice from "./slicers/ranking/rankingSoloEasy";
import rankingSoloHardSlice from "./slicers/ranking/rankingSoloHard";
import rankingSoloNormalSlice from "./slicers/ranking/rankingSoloNormal";


//setupStore
const store = configureStore({
	reducer: {
		mode: modeSlice,
		players: playerSlice,
		rankingMulti: rankingMultiSlice,
		rankingSoloEasy: rankingSoloEasySlice,
		rankingSoloHard: rankingSoloHardSlice,
		rankingSoloNormal: rankingSoloNormalSlice
	}
})

export default store
