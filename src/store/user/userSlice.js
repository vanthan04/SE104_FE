import { createSlice } from "@reduxjs/toolkit";
import { getCurrent } from "./userActions";

const userSlice = createSlice({
    name: "user",
    initialState: {
        fullname: "",
        isLoggin: false,
        token: "",
        expiresAt: "",
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.fullname = "";
            state.isLoggin = false;
            state.token = "";
            state.expiresAt = "";
            state.fullname = "";
        },
        loginSuccess: (state, action) => {
            state.isLoggin = true;
            state.token = action.payload.token;
            state.expiresAt = action.payload.expiresAt;
            state.fullname = action.payload.data.fullname;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCurrent.fulfilled, (state, action) => {
                state.fullname = action.payload.fullname;
            })
            .addCase(getCurrent.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const { logout, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
