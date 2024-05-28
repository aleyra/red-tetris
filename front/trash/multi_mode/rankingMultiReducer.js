import { RANK_MULTI } from "./rankingMultiTypes";

const demo_ranking = [
	{ name: 'Aleyra Multi', score: 12345678 },
	{ name: 'Yuu', score: 1234567 },
	{ name: 'Benjamin', score: 123456 },
	{ name: 'Lucille', score: 12345 }
]

const initialState = {
	ranking: demo_ranking
}

const rankingMultiReducer = (state = initialState, action) => {
	switch(action.type) {
		case RANK_MULTI: return {
			...state,
			ranking: orderMultiRanking([...state.ranking, { name: action.payload[0], score: action.payload[1] }])
		}
		default: return state;
	}
}

function orderMultiRanking(ranking) {
	return ranking.sort((a, b) => b.score - a.score)
}

export const getMultiRanking = state => orderMultiRanking(state.rankingMulti)

// export const getPlayerMulti = (state, i) => getMultiRanking(state.rankingMulti)[i]

// export const getMultiRankingLength = state => getMultiRanking(state.rankingMulti).length

export default rankingMultiReducer