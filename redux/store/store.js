import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import todoSlice from '../slices/todoSlice'

export const makeStore = () =>
    configureStore({
        reducer: {
            todo:todoSlice
        },
    });

export const wrapper = createWrapper(makeStore);