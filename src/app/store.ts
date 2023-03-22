import { configureStore, Action } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer
    product: productReducer 
})

export type AppDispatch = typeof store.dispatch

export default store