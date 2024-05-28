import { RANK_SOLO_HARD } from "./rankingSoloHardTypes";

export const rankSoloHard = (name, score) => {
	return {
		type: RANK_SOLO_HARD,
		payload: [name, score]
	}
}