import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { apiSlice } from "./slice/slice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer, 

  },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware, apiSlice.middleware), 

});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;