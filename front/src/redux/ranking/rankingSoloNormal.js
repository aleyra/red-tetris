import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface demo_ranking {
    ranking: [
        {name: string, score: number}
    ]
}

const initialState: demo_ranking ={
    ranking: [
        { name: 'Aleyra Normal', score: 12345678 },
        { name: 'Benjamin', score: 123456 },
        { name: 'Yuu', score: 1234567 },
        { name: 'Lucille', score: 12345 }
    ]
}

const rankingSoloNormalSlice = createSlice({
    name: "ranking",
    initialState,
    reducers: {
        orderNormal: (state) => {
            state.ranking = state.ranking.sort((a, b) => b.score - a.score);
        },
        addRankNormal: (state, action) => {
            // state.ranking = [...state.ranking, { name: payload[0], score: payload[1] }]
            state.ranking.push({ name: action.payload[0], score: action.payload[1] })
        }
    }
})

export const {orderNormal, addRankNormal} = rankingSoloNormalSlice.actions;

export default rankingSoloNormalSlice.reducer