import { createSlice } from "@reduxjs/toolkit";

const titleDotSlice = createSlice({
  name: "dotCoordinate",
  initialState: {
    dot: {
      w: null,
      h: null,
      xPos: null,
      yPos: null,
    },
    dotReady: false,
    pageReady: false,
  },
  reducers: {
    setCoordinates(state, actions) {
      state.dot.xPos = actions.payload.x;
      state.dot.yPos = actions.payload.y;
      state.dot.w = actions.payload.w;
      state.dot.h = actions.payload.h;
      state.dotReady = true;
    },
    setPageStatus(state, actions) {
      state.pageReady = actions.payload;
    },
  },
});

export const { setCoordinates, setPageStatus } = titleDotSlice.actions;

export default titleDotSlice.reducer;
