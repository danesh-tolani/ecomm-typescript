import { createSlice, PayloadAction, createAsyncThunk, current } from "@reduxjs/toolkit";
import { ProductData } from "../shared/type";


  
  const cartSlice = createSlice({
    name: "cart",
    initialState: [] as  ProductData[],
    reducers: {
        addToCart: (state, action:PayloadAction<ProductData>) => {
          let present = false;
          state.forEach((item) => {
            if(action.payload.id === item.id) {
              present = true;
            }
          })
          if(present === false) {
            state.push({...action.payload, quantity: 1})

            // let total = 0;

            // state.forEach((item) => total += +item.price)
          }
        },

        setQuantity: (state, action:PayloadAction<{id:number, quantity: number}>) => {
          const requiredItem = state.find((item) => item.id === action.payload.id)

          if (requiredItem?.quantity !== undefined) {
            requiredItem.quantity = action.payload.quantity
          } 
        },
        
        removeItem: (state, action:PayloadAction<number>) => {
          const index = state.findIndex(item => item.id === action.payload);
          if (index !== -1) {
            state.splice(index, 1);
          }
        },

        clearCart: (state) => {
          console.log("clear all")
          state.splice(0, state.length)
        },

        increaseAmount : (state, action:PayloadAction<number>) => {
          const cartItem = state.find((item) => item.id === action.payload)
          console.log(current(cartItem))
          // console.log(`item ${action.payload}amount increase`)
        },

        decreaseAmount : (state, action:PayloadAction<number>) => {
          const cartItem = state.find((item) => item.id === action.payload)
          console.log(current(cartItem))
          // console.log(`item ${action.payload}amount increase`)
        }

    }
  });
  
  export default cartSlice;