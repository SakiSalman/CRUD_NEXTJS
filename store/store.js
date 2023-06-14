import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '@/app/todSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})



// export store
export default store