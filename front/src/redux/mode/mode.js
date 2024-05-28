import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface mode {
    modeSelected: string
}

const initialState: mode ={
    modeSelected: 'none'
}

const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        // display: (state) => {
        //     state.modeSelected
        // },
        update: (state, action) => {
            state.modeSelected = action.payload
        }
    }
})

export const { update} = modeSlice.actions;

export default modeSlice.reducer