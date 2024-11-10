import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState:
     {
        items: [],
      
    },
    
    reducers: {
        addItem: (state, action) =>{
           state.items.push(action.payload);
        },
        // <h1>{items.card.info.id}</h1>
        removeItem: (state, action) => {
        //   console.log(current(state.items[0]))
           state.items.splice(state.items.findIndex((item) => item.card.info.id === action.payload), 1);
        },

        clearCart : (state) => {
            state.items = [];
        }

    }
})
 
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;