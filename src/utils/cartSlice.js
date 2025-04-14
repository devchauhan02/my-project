import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items : []
    },
    reducers: {
        addItem: (state , action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0;
            console.log(current(state)) // u  cant just console.log(state) directly in redux
        },
    }
})
export const {addItem , removeItem , clearCart} =  cartSlice.actions

export default cartSlice.reducer;