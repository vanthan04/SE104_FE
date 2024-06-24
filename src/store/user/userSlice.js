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
        },
        logout: (state) => {
            state.token = null;
            state.expiresAt = null;
            state.isLoggin = false;
            localStorage.clear();
        },
        clearStorage: (state, action) => {
            localStorage.clear();
        }
    },
});

export const { loginSuccess, logout, clearStorage } = userSlice.actions;
export default userSlice.reducer;
