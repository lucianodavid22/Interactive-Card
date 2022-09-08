import { configureStore } from '@reduxjs/toolkit'
import CardReducer from './reducer'

export const CardStore = configureStore({
  reducer: {
    cardReducer: CardReducer
  },
});