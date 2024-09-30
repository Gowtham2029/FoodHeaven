import { createSlice } from "@reduxjs/toolkit";





const cartSlice = createSlice({
    name: 'cart',
    initialState:
     {
        items: [],
      
    },
    
    reducers: {
        addItem: (state, action) =>{
            //  console.log(state);
            state.items.push(action.payload);
           
        },

        removeItem: (state, action) => {

            // const index = cartSlice.items.indexOf(action.payload);
           
            state.items.splice(action.payload, 1);
            
        },

        clearCart : (state) => {
            state.items = [];
        }

    }
})
 
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;