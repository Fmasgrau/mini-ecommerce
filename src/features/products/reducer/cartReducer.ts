/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { addProduct, deleteProduct, removeProduct } from '../actions/cart';

interface IProductList {
    id: string;
    name: string;
    imgSrc: string;
    price: number;
    quantity: number;
}

interface IinitialState {
    products: IProductList[];
}

const initialState: IinitialState = {
    products: [],
};

const cartReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(addProduct, (state, action) => {
            const { id: productId } = action.payload;
            const isInArray = state.products.find((res) => res.id === productId);

            if (isInArray) {
                isInArray.quantity += 1;
            } else {
                state.products.push(action.payload);
            }
        })
        .addCase(deleteProduct, (state, action) => {
            const product = state.products.find((res) => action.payload === res.id);
            if (product && product.quantity >= 1) {
                product.quantity -= 1;
            }
        })

        .addCase(removeProduct, (state, action) => {
            state.products = state.products.filter(
                (res) => action.payload !== res.id
            );
        })
);

export default cartReducer;
