import { createAsyncThunk } from '@reduxjs/toolkit'
import { FETCH_PRODUCTS } from './types'
import * as ProductService from '../../../services/products.service'

export const fetchProducts = createAsyncThunk(FETCH_PRODUCTS, async () => {
    try {
        const { amiibo: value } = await ProductService.getProducts()
        return value
    } catch (e) {
        // console.log("error al traer datos")
        return []
    }
})