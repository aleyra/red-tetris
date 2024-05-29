import { createSlice } from "@reduxjs/toolkit";

interface list_players {
    players: [
        {id:number, name: string, score: number}
    ]
}

const initialState: list_players ={
    players: [
        { id: 1, name: 'Aleyra', score: 12345678 },
        { id: 2, name: 'Benjamin', score: 123456 },
        { id: 3, name: 'Yuu', score: 1234567 },
        { id: 4, name: 'Lucille', score: 12345 }
    ]
}

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        addPlayer: (state, action) => {
            state.players.push({ id: state.players.length + 1, name: action.payload, score: 0 })
        },
        removePlayer: (state, action) => {
            state.players = state.players.filter(player => player.id !== action.payload)
        },
        updatePlayer: (state, action) => {
            const { id, name, score } = action.payload
            const existingPlayer = state.players.find(player => player.id === id)
            if (existingPlayer) {
                existingPlayer.name = name
                existingPlayer.score = score
            }
        },
        getPlayerById: (state, action) => {
            const player = state.players.find(player => player.id === action.payload)
            return player
        }
    }
})

export const {addPlayer, removePlayer, updatePlayer, getPlayerById} = playerSlice.actions;

export default playerSlice.reducer

