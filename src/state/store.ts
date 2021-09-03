import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '../features/products/reducer/productsReducer'
import CartReducer from '../features/products/reducer/cartReducer'

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store