import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://648ca2888620b8bae7ed2a6b.mockapi.io/";

export const getCars = createAsyncThunk(
  "cars/getAll",
  async ({ page, perPage }, { rejectWithValue }) => {
    const options = {
      params: {
        page,
        limit: perPage,
      },
    };
    try {
      const { data } = await axios.get("/adverts", options);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
