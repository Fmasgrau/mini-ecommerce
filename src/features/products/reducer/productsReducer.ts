/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit'
import { fetchProducts } from '../actions/products'

const initialState = {
  isLoading: false,
  products: []
}


const productsReducer = createReducer(initialState, builder =>
  builder
    .addCase(fetchProducts.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
      state.isLoading = false
    })
)

export default productsReducer

