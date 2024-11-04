import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice';
import movieReducer from './movieSlice'

const appStore = configureStore({
    reducer:{
        reducer:userReducer,
        movies:movieReducer,
    }
})

export default appStore;