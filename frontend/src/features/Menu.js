import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: ["Products", "Pricing", "Blog"],
  settings: ["Profile", "Account", "Dashboard", "Logout"],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
