import { createSlice } from "@reduxjs/toolkit";

interface DataUsers {
  id: number;
  name?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  price?: string;
  checkIn?: string;
  checkOut?: string;
  totalRoom?: string;
  totalGuest?: string;
  codeRefferal?: string;
  room_name?: string;
}

interface BookingState {
  bookingRoomData: DataUsers[];
  error: string | null;
}

const initialState: BookingState = {
  bookingRoomData: [],
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    bookingRoomData: (state, action) => {
      state.bookingRoomData = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { bookingRoomData, setError, clearError } = bookingSlice.actions;
export default bookingSlice.reducer;
