import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface demo_ranking {
    ranking: [
        {name: string, score: number}
    ]
}

const initialState: demo_ranking ={
    ranking: [
        { name: 'Aleyra Hard', score: 12345678 },
        { name: 'Benjamin', score: 123456 },
        { name: 'Yuu', score: 1234567 },
        { name: 'Lucille', score: 12345 }
    ]
}

const rankingSoloHardSlice = createSlice({
    name: "ranking",
    initialState,
    reducers: {
        orderHard: (state) => {
            state.ranking = state.ranking.sort((a, b) => b.score - a.score);
        },
        addRankHard: (state, action) => {
            state.ranking.push({ name: action.payload[0], score: action.payload[1] })
        }
    }
})

export const {orderHard, addRankHard} = rankingSoloHardSlice.actions;

export default rankingSoloHardSlice.reducer