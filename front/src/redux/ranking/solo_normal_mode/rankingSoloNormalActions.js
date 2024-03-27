import { RANK_SOLO_NORMAL } from './rankingSoloNormalTypes'

export const rankPlayerSoloNormal = (name, score) => {
	return {
		type: RANK_SOLO_NORMAL,
		payload: [name, score]
	}
}