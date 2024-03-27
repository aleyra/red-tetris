import { SELECT_MODE } from './modeTypes'

export const selectMode = (mode) => {
	return {
		type: SELECT_MODE,
		payload: mode
	}
}