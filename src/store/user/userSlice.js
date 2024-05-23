import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggin: false,
    token: null,
    isLoading: false,
    mes: "",
  },

  reducers: {
    login: (state, action) => {
        state.isLoggin = action.payload.isLoggin;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
    },
    logout: (state, action) => {
        state.isLoggin = false;
        state.token = null;
        localStorage.clear();
    },

  },

});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;