import { createSlice } from "@reduxjs/toolkit";
import { getCars, getTotal } from "./operations";

const initialState = {
  items: [],
  favorites: [],
  totalItems: 0,
  page: 1,
  perPage: 8,
  isLoading: false,
  error: null,
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  if (state.page === 1) {
    state.items = action.payload;
  } else {
    state.items = [...state.items, ...action.payload];
  }
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleTotalFulfilled = (state, action) => {
  state.totalItems = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    updatePage(state, action) {
      state.page += 1;
    },
    setFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (car) => car.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, handleFulfilled)
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.rejected, handleRejected)
      .addCase(getTotal.fulfilled, handleTotalFulfilled);
  },
});

export const { updatePage, setFavorite, removeFavorite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
