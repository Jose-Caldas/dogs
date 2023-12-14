import { configureStore, combineReducers } from '@reduxjs/toolkit'
import photo from '../reducer/photo'
import token from '../reducer/token'
import user from '../reducer/user'

const reducer = combineReducers({ photo, token, user })

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export default store
