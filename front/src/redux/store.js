import { configureStore } from '@reduxjs/toolkit';
// import modeReducer from "./mode/modeReducer";
// import rankingMultiReducer from "./ranking/multi_mode/rankingMultiReducer";
// import rankingSoloEasyReducer from "./ranking/solo_easy_mode/rankingSoloEasyReducer";
// import rankingSoloHardReducer from "./ranking/solo_hard_mode/rankingSoloHardReducer";
// import rankingSoloNormalReducer from "./ranking/solo_normal_mode/rankingSoloNormalReducer";
import modeSlice from "./mode/mode";
import rankingMultiSlice from "./ranking/rankingMulti";
import rankingSoloEasySlice from "./ranking/rankingSoloEasy";
import rankingSoloHardSlice from "./ranking/rankingSoloHard";
import rankingSoloNormalSlice from "./ranking/rankingSoloNormal";


//setupStore
const store = configureStore({
	reducer: {
		// mode: modeReducer,
		mode: modeSlice,
		// rankMulti: rankingMultiReducer,
		rankingMulti: rankingMultiSlice,
		// rankSoloEasy: rankingSoloEasyReducer,
		rankingSoloEasy: rankingSoloEasySlice,
		// rankSoloHard: rankingSoloHardReducer,
		rankingSoloHard: rankingSoloHardSlice,
		// rankingSoloNormal: rankingSoloNormalReducer,
		rankingSoloNormal: rankingSoloNormalSlice
	}
})

export default store
