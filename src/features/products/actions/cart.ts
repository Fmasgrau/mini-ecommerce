import { createAction } from '@reduxjs/toolkit'
import { ADD_PRODUCT, DELETE_PRODUCT } from './types'

interface IProductList {
    id: string,
    name: string,
    imgSrc: string,
    price: number,
    quantity: number
}

export const addProduct = createAction<IProductList>(ADD_PRODUCT)

export const deleteProduct = createAction<string>(DELETE_PRODUCT)