import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    expiresAt: null,
    isLoggin: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.expiresAt = action.payload.expiresAt;
            state.isLoggin = true;
            localStorage.setItem("token", action.payload.token)
        },
        logout: (state) => {
            state.token = null;
            state.expiresAt = null;
            state.isLoggin = false;
            localStorage.clear()
        },
        extendSession: (state, action) => {
            state.expiresAt = action.payload.expiresAt;
        }
    },
});

export const { loginSuccess, logout, extendSession } = userSlice.actions;
export default userSlice.reducer;
