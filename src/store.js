import {configureStore} from '@reduxjs/toolkit';
import cartreducer from './store/features/cart';
import counterReducer from './store/features/counterSlice';

export const  store =configureStore({
    reducer:{
        counter:counterReducer,
        cart:cartreducer
    }
})