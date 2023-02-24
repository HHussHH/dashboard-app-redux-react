import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "features/filter/filtre-slice";
import { positionReducer } from "features/positions/position-slice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    positions: positionReducer,
  },
  devTools: true,
});
