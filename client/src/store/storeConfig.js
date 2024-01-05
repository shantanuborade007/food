import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./sliceConfig";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer
  }
});
