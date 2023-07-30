import { configureStore } from '@reduxjs/toolkit'
import userReducer from "@/redux/user/userSlice"
import pcBuilderReducer from "@/redux/pc-builder/pc-builderSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    pcBuilder: pcBuilderReducer
  },
})