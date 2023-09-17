import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  price: "",
  from: null,
  to: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setBrandFilter(state, action) {
      state.brand = action.payload;
    },
    setPriceFilter(state, action) {
      state.price = action.payload;
    },
    setFromFilter(state, action) {
      state.from = action.payload;
    },
    setToFilter(state, action) {
      state.to = action.payload;
    },
  },
});

export const { setBrandFilter, setPriceFilter, setFromFilter, setToFilter } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
