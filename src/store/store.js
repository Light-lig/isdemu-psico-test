import { configureStore } from '@reduxjs/toolkit'
import questionsReducers from '../slices/questionsSlice';
import userReducer from '../slices/userSlice';

export default configureStore({
    reducer: {
      questions: questionsReducers,
      user:userReducer
    },
  })