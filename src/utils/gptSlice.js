import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState :{
        showGptSearch:false
    },
    reducers:{
        toogleGptSearchView: (state) =>{
            state.showGptSearch = !state.showGptSearch
        }
    }
})
export const {toggleGptSearchView} = gptSlice.actions;
export default gptSlice.reducer