import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { baseApi } from "../api/baseApi";
// import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
