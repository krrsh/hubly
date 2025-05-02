import { configureStore } from '@reduxjs/toolkit'

import chatReducer from './ChatSlice'

export const store = configureStore({ reducer: {
    chatData : chatReducer
} })