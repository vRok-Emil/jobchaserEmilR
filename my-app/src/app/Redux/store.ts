import { configureStore } from '@reduxjs/toolkit'
import  FilterSlice  from './counter'

export const store = configureStore({
  reducer: {
    filter: FilterSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch