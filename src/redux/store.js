import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../user/userconfig'

export default configureStore({
     reducer: {
          user: userReducer
     }
})