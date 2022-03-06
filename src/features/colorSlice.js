import { createSlice } from "@reduxjs/toolkit";

let appBody = document.querySelector("body");
const colorSlice = createSlice({
  name: "appBackgroundColor",
  initialState: {
    color: "#fff",
  },
  reducers: {
    setAppColor(state) {
      state.color = "fff";
      appBody.style.backgroundColor = "#fff";
    },
    changeAppColor(state, actions) {
      let color = actions.payload;
      state.color = color;
      appBody.style.backgroundColor = `${color}`;
    },
  },
});

export const { changeAppColor, setAppColor } = colorSlice.actions;

export default colorSlice.reducer;
