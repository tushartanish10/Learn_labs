import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.error = null,
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload,
            state.error = null,
            state.loading = false
        },
        signInFailure: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        signOutSuccess: (state) => {
            state.currentUser = null,
            state.loading = false,
            state.error = null
        }
    }
})

export const {signInStart, signInSuccess, signInFailure, signOutSuccess} = userSlice.actions;
export default userSlice.reducer;