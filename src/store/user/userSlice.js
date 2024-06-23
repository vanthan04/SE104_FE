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
    // extraReducers: (builder) => {
    //     builder.addCase(actions.getCurrent.pending, (state) => {
    //       state.isLoading = true;
    //     });
    //     builder.addCase(actions.getCurrent.fulfilled, (state, action) => {
    //       state.isLoading = false;
    //       state.current = action.payload;
    //       state.isLoggin = true;
    //     });
    
    //     builder.addCase(actions.getCurrent.rejected, (state, action) => {
    //       state.isLoading = false;
    //       state.current = null;
    //       state.isLoggin = false;
    //       state.token = null;
    //       state.mes =
    //         "The login session has expired. Please log in again to continue!";
    //     });
    //   },
});

export const { loginSuccess, logout, clearStorage } = userSlice.actions;
export default userSlice.reducer;
