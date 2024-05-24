import { RANK_SOLO_NORMAL } from './rankingSoloNormalTypes'

export const rankSoloNormal = (name, score) => {
	return {
		type: RANK_SOLO_NORMAL,
		payload: [name, score]
	}
}