import { createSlice } from "@reduxjs/toolkit";

const mobileSlice = createSlice({
  name: "mobileUser",
  initialState: {
    isMobileUser: false,
  },
  reducers: {
    setMobileUser(state, actions) {
      state.isMobileUser = actions.payload;
    },
  },
});

export const { setMobileUser } = mobileSlice.actions;

export default mobileSlice.reducer;
