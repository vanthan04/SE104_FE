import { configureStore } from "@reduxjs/toolkit";

import adminSlice from "./admin/userSlice"

export const store = configureStore({
  reducer: {
    admin: adminSlice,
  },
 
});
