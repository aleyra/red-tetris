import { RANK_MULTI } from "./rankingMultiTypes";

export const rankMulti = (score) => {
	return {
		type: RANK_MULTI,
		payload: score
	}
}
