import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/Menu";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
