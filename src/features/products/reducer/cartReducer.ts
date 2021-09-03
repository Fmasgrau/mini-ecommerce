/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit'
import { addProduct, deleteProduct } from '../actions/cart'

interface IProductList {
    id: string,
    name: string,
    imgSrc: string,
    price: number,
    quantity: number
}

interface IinitialState {
    products: IProductList[]
}

const initialState: IinitialState = {
    products: []
}


const productsReducer = createReducer(initialState, builder =>
    builder
        .addCase(addProduct, (state, action) => {
            const { id: productId } = action.payload
            const isInArray = state.products.some(res => res.id === productId)
            let newArray: any[] = [...state.products]
            if (isInArray) {
                newArray = state.products.map(p => {
                    if (productId === p.id) {
                        return { ...p, quantity: p.quantity + 1 }
                    }
                    return p
                })
            } else {
                newArray.push(action.payload)
            }
            state.products = newArray


        })
        .addCase(deleteProduct, (state, action) => {
            // TO DO
            state.products.filter(res => action.payload === res.id)
        })
)

export default productsReducer

