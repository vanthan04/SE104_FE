import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./admin/userSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer
  }
});
