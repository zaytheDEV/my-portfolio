import { configureStore } from '@reduxjs/toolkit'
import colorReducer from '../features/colorSlice';
import navReducer from '../features/navSlice';
import cursorReducer from '../features/cursorSlice';
import titleDotReducer from '../features/titleDotSlice';
import mobileUserReducer from '../features/mobileSlice';
const store = configureStore({
  reducer: {
    appColor: colorReducer,
    navMenu: navReducer,
    cursor: cursorReducer,
    dot: titleDotReducer,
    mobileUser: mobileUserReducer,
  },
})

export default store;