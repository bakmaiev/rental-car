import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./operations";

const initialState = {
  items: [],
  totalItems: 0,
  page: 1,
  perPage: 8,
  isLoading: false,
  error: null,
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
  state.totalItems = action.payload.length;
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
  reducers: {
    updatePage(state, action) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, handleFulfilled)
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.rejected, handleRejected);
  },
});

export const { updatePage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
