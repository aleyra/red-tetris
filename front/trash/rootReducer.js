import { combineReducers } from "redux";

import modeReducer from "./mode/modeReducer";
import rankingMultiReducer from "./ranking/multi_mode/rankingMultiReducer";
import rankingSoloEasyReducer from "./ranking/solo_easy_mode/rankingSoloEasyReducer";
import rankingSoloHardReducer from "./ranking/solo_hard_mode/rankingSoloHardReducer";
import rankingSoloNormalReducer from "./ranking/solo_normal_mode/rankingSoloNormalReducer";

const rootReducer = combineReducers({
	mode: modeReducer,
	rankMulti: rankingMultiReducer,
	rankSoloEasy: rankingSoloEasyReducer,
	rankSoloHard: rankingSoloHardReducer,
	rankingSoloNormal: rankingSoloNormalReducer,
})

export default rootReducer