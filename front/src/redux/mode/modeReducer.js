import { SELECT_MODE } from "./modeTypes"

const initialState = {
	modeSelected: 'none'
}

const modeReducer = (state = initialState, action) => {
	switch(action.type) {
		case SELECT_MODE: return {
			...state,
			modeSelected: action.payload
		}
		default: return state;
	}
}

export default modeReducer
