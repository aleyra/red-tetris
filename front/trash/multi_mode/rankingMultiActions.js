import { RANK_MULTI } from "./rankingMultiTypes";

export const rankMulti = (name, score) => {
	return {
		type: RANK_MULTI,
		payload: [name, score]
	}
}
