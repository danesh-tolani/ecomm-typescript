import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: "product",
    initialState: products,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.isLoading = payload
        },
        setAuthSuccess: (state, {payload}: PayloadAction<CurrentUser>) => {
            state.currentUser = payload
            state.isAuth = true
        },
        setLogOut: (state) => {
            state.isAuth = false
            state.currentUser = undefined
        },
        setAuthFailed: (state, {payload}: PayloadAction<AuthError>) => {
            state.error = payload,
            state.isAuth = false
        }
    }
})