import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const commonConfig = {
  key: 'qltv/user',
  storage,
};

const userConfig = {
  ...commonConfig,
  whitelist: ['isLoggin', 'token', 'expiresAt'],
};

const persistedReducer = persistReducer(userConfig, userSlice);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
