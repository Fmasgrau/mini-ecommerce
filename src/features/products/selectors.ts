

export const getAllProductsSelector = (state: any): any[] => state.products.products;

export const getProductFromCartSelector = (state: any): any[] => state.product.cart.products;
