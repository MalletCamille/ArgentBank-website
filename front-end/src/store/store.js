import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../store/login/loginSlice'

export const store = configureStore({
  reducer: {
    login : loginReducer,
  },
})