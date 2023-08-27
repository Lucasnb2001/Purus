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
        }
    }
})
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer