import { createSlice } from "@reduxjs/toolkit";
import { getCars, getTotal } from "./operations";
import { Notify } from "notiflix";

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

  state.items = action.payload;
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
      state.perPage += 8;
    },
    setFavorite(state, action) {
      state.favorites.push(action.payload);
      Notify.success("The car has been successfully added to favorites");
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (car) => car.id !== action.payload.id
      );
      Notify.success("The car has been successfully removed from favorites");
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
