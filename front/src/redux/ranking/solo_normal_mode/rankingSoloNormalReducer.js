import { RANK_SOLO_NORMAL } from "./rankingSoloNormalTypes"

//demo_ranking is a list of players and their scores order by score
const demo_ranking = [
	{ name: 'Aleyra Normal', score: 12345678 },
	{ name: 'Yuu', score: 1234567 },
	{ name: 'Benjamin', score: 123456 },
	{ name: 'Lucille', score: 12345 }
]

const initialState = {
	ranking: demo_ranking
}

//a reducer that adds a player to the ranking and order the ranking by score
const rankingSoloNormalReducer = (state = initialState, action) => {
	switch(action.type) {
		case RANK_SOLO_NORMAL: return {
			...state,
			ranking: orderSoloNormalRanking([...state.ranking, { name: action.payload[0], score: action.payload[1] }])
		}
		default: return state;
	}
}

//a function ordering the ranking by score
function orderSoloNormalRanking(ranking) {
	return ranking.sort((a, b) => b.score - a.score)
}

//a function that returns the ranking
export const getSoloNormalRanking = state => orderSoloNormalRanking(state.rankingSoloNormal)

// a function that returns the player number i in the ranking
// export const getPlayerSoloNormal = (state, i) => getSoloNormalRanking(state.rankingSoloNormal)[i]

// export const getSoloNormalRankingLength = state => getSoloNormalRanking(state.rankingSoloNormal).length

export default rankingSoloNormalReducer
