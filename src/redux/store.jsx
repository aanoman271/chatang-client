import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loderSlice";

const store = configureStore({
  reducer: { loaderReducer },
});
export default store;
