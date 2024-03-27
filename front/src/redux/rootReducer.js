import { combineReducers } from "redux";

//reducers
import rankingSoloNormalReducer from "./ranking/solo_normal_mode/rankingSoloNormalReducer";
import modeReducer from "./mode/modeReducer";

const rootReducer = combineReducers({
	//ranking
    rankingSoloNormal: rankingSoloNormalReducer,
	//select mode
	selectMode: modeReducer
})

export default rootReducer
