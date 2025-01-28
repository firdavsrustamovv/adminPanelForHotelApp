import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../slice/loaderSlice";
import bookedReducer from "../slice/bookingSlice";

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    booked: bookedReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
