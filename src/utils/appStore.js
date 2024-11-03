import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice';

const appStore = configureStore({
    reducer:{
        reducer:userReducer,
    }
})

export default appStore;