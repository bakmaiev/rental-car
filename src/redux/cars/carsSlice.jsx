import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, handleFulfilled)
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
