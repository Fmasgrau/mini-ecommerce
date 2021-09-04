

export const getAllProductsSelector = (state: any): any[] => state.products.products;

export const getProductsFromCartSelector = (state: any): any[] => state.product.cart.products;
