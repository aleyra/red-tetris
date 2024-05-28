import { RANK_SOLO_EASY } from "../solo_easy_mode/rankingSoloEasyTypes";

export const rankSoloEasy = (name, score) => {
	return {
		type: RANK_SOLO_EASY,
		payload: [name, score]
	}
}