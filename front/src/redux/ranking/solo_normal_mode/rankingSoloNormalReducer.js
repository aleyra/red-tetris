import { RANK_SOLO_NORMAL } from "./rankingSoloNormalTypes"

const demo_ranking = new Map()

demo_ranking.set('Aleyra', 12345678)
demo_ranking.set('mfunyu', 1234567)
demo_ranking.set('Léto', 123456)
demo_ranking.set('Lucille', 12345)

const initialState = {
	ranking: demo_ranking
}

const rankingSoloNormalReducer = (state = initialState, action) => {
	switch(action.type) {
		case RANK_SOLO_NORMAL: return {
			... state,
			ranking: state.ranking.set(action.payload[0], action.payload[1])
		}
		default: return state;
	}
}

export default rankingSoloNormalReducer
