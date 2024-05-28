import { configureStore } from '@reduxjs/toolkit';
import modeSlice from "./mode/mode";
import rankingMultiSlice from "./ranking/rankingMulti";
import rankingSoloEasySlice from "./ranking/rankingSoloEasy";
import rankingSoloHardSlice from "./ranking/rankingSoloHard";
import rankingSoloNormalSlice from "./ranking/rankingSoloNormal";


//setupStore
const store = configureStore({
	reducer: {
		mode: modeSlice,
		rankingMulti: rankingMultiSlice,
		rankingSoloEasy: rankingSoloEasySlice,
		rankingSoloHard: rankingSoloHardSlice,
		rankingSoloNormal: rankingSoloNormalSlice
	}
})

export default store
