import { createSlice } from "@reduxjs/toolkit";
export const adminSlice = createSlice({
  name: 'admin',
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
    clearMessage: (state) => {
      state.mes = "";
    },
  },

});

export const { login, logout, clearMessage } = adminSlice.actions;
export default adminSlice.reducer;