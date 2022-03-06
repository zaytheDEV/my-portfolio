import { createSlice } from "@reduxjs/toolkit";

const cursorSlice = createSlice({
  name: "cursor",
  initialState: {
    cursorColor: "245, 82, 82",
    cursorLarge: false,
    cursorTitle: "",
    projectCursorState: false,
    projectCursorPicture: "",
    cursorFade: false,
  },
  reducers: {
    resetCursor(state) {
      state.cursorColor = "245, 82, 82";
      state.cursorLarge = false;
      state.cursorTitle = "";
      state.projectCursorState = false;
      state.projectCursorPicture = "";
    },
    setCursor(state, actions) {
      let color = actions.payload.color;
      let title = actions.payload.title;
      state.cursorColor = color;
      state.cursorLarge = true;
      state.cursorTitle = title;
    },
    setCursorPicture(state, actions) {
      state.projectCursorState = true;
      state.projectCursorPicture = actions.payload;
    },
    setPageCursor(state, actions) {
      state.cursorColor = actions.payload;
    },
    shrinkCursor(state) {
      state.cursorLarge = false;
      state.projectCursorState = false;
      state.projectCursorPicture = "";
    },
  },
});

export const {
  setCursor,
  resetCursor,
  setCursorPicture,
  setPageCursor,
  shrinkCursor,
} = cursorSlice.actions;

export default cursorSlice.reducer;
