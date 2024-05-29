import { createSlice } from "@reduxjs/toolkit";

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
        updateMode: (state, action) => {
            state.modeSelected = action.payload
        }
    }
})

export const { updateMode} = modeSlice.actions;

export default modeSlice.reducer