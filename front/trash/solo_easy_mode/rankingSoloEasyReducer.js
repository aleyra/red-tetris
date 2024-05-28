import { RANK_SOLO_EASY } from "./rankingSoloEasyTypes";

const demo_ranking = [
	{ name: 'Aleyra Easy', score: 12345678 },
	{ name: 'Yuu', score: 1234567 },
	{ name: 'Benjamin', score: 123456 },
	{ name: 'Lucille', score: 12345 }
]

const initialState = {
	ranking: demo_ranking
}

const rankingSoloEasyReducer = (state = initialState, action) => {
	switch(action.type) {
		case RANK_SOLO_EASY: return {
			...state,
			ranking: orderSoloEasyRanking([...state.ranking, { name: action.payload[0], score: action.payload[1] }])
		}
		default: return state;
	}
}

function orderSoloEasyRanking(ranking) {
	return ranking.sort((a, b) => b.score - a.score)
}

export const getSoloEasyRanking = state => orderSoloEasyRanking(state.rankingSoloEasy)

// export const getPlayerSoloEasy = (state, i) => getSoloEasyRanking(state.rankingSoloEasy)[i]

// export const getSoloEasyRankingLength = state => getSoloEasyRanking(state.rankingSoloEasy).length

export default rankingSoloEasyReducer
