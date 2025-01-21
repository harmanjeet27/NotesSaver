import { configureStore } from '@reduxjs/toolkit'
import PasteReducer from './PasteSlice'

export default configureStore({
  reducer: {
    paste: PasteReducer,
  },
})