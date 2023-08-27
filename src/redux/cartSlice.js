import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    productsNumber: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
          // check if in product array
          state.products.push({
            ...action.payload,
            quantity: 1,
          });
          state.productsNumber = state.productsNumber + 1;
          console.log(state.products.map((element) => (console.log(element))));
        },
        removeFromCart: (state, action) => {
          // Encontrar o indice do produto no array
          const index = state.products.findIndex(
            (product) => product.id === action.payload
          );
          // Remove do array
          state.products.splice(index, 1);
        },
        emptyCart: (state, action) => {
          state.products = []
          state.productsNumber = 0
        }
    }
})
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer