import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    color: "#151515",
    hideItem: false,
  },
  reducers: {
      resetNav(state) {
        state.color = '#151515';
        state.hideItem = false;
      },
    setNavColor(state, actions) {
      state.color = actions.payload;
    },
    hideNavItem(state) {
      state.hideItem = !state.hideItem;
    },
  },
});

export const { setNavColor, hideNavItem, resetNav } = navSlice.actions;

export default navSlice.reducer;
