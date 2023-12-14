import { configureStore, combineReducers } from '@reduxjs/toolkit'
import photo from '../reducer/photo'
import token from '../reducer/token'
import user from '../reducer/user'
import feed from '../reducer/feed'
import ui from '../reducer/ui'

const reducer = combineReducers({ photo, token, user, feed, ui })

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export default store
