import { configureStore, combineReducers } from '@reduxjs/toolkit'
import photo from '../reducer/photo'

const reducer = combineReducers({ photo })

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export default store
