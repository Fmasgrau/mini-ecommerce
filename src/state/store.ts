import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '../features/products/reducer/productsReducer'
import CartReducer from '../features/products/reducer/cartReducer'
import { saveState, loadState } from '../utils/localStorage'

const initialData: any = loadState()

const store = configureStore({
  preloadedState: initialData,
  reducer: {
    products: ProductsReducer,
    cart: CartReducer
  },

})

store.subscribe(() => {
  saveState(store.getState())
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store