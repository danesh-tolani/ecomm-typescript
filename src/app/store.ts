import { configureStore, Action, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice"

const rootReducer = combineReducers({
    cart: cartSlice.reducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type AppState = ReturnType<typeof rootReducer>;
  
  export default store;