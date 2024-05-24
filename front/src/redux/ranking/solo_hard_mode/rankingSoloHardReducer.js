import { RANK_SOLO_HARD } from './rankingSoloHardTypes'

const demo_ranking = [
	{ name: 'Aleyra Hard', score: 12345678 },
	{ name: 'Yuu', score: 1234567 },
	{ name: 'Benjamin', score: 123456 },
	{ name: 'Lucille', score: 12345 }
]

const initialState = {
	ranking: demo_ranking
}

const rankingSoloHardReducer = (state = initialState, action) => {
	switch(action.type) {
		case RANK_SOLO_HARD: return {
			...state,
			ranking: orderSoloHardRanking([...state.ranking, { name: action.payload[0], score: action.payload[1] }])
		}
		default: return state;
	}
}

function orderSoloHardRanking(ranking) {
	return ranking.sort((a, b) => b.score - a.score)
}

export const getSoloHardRanking = state => orderSoloHardRanking(state.rankingSoloHard)

// export const getPlayerSoloHard = (state, i) => getSoloHardRanking(state.rankingSoloHard)[i]

// export const getSoloHardRankingLength = state => getSoloHardRanking(state.rankingSoloHard).length

export default rankingSoloHardReducer

