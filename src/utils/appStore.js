import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import gptReducer from "./gptSlice"

const appStore = configureStore({
    reducer:{
        reducer:userReducer,
        movies:movieReducer,
        gpt:gptReducer
    }
})

export default appStore;