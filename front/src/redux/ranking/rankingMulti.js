import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface demo_ranking {
    ranking: [
        {name: string, score: number}
    ]
}

const initialState: demo_ranking ={
    ranking: [
        { name: 'Aleyra Multi', score: 12345678 },
        { name: 'Benjamin', score: 123456 },
        { name: 'Yuu', score: 1234567 },
        { name: 'Lucille', score: 12345 }
    ]
}

const rankingSoloMultiSlice = createSlice({
    name: "ranking",
    initialState,
    reducers: {
        orderMulti: (state) => {
            state.ranking = state.ranking.sort((a, b) => b.score - a.score);
        },
        addRankMulti: (state, action) => {
            state.ranking.push({ name: action.payload[0], score: action.payload[1] })
        }
    }
})

export const {orderMulti, addRankMulti} = rankingSoloMultiSlice.actions;

export default rankingSoloMultiSlice.reducer