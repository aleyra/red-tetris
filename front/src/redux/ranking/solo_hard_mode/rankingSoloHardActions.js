import { RANK_SOLO_HARD } from "./rankingSoloHardTypes";

export const rankSoloHard = (score) => {
	return {
		type: RANK_SOLO_HARD,
		payload: score
	}
}