import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Notify } from "notiflix";

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
      Notify.failure(`Server error: ${e.message}`);
      return rejectWithValue(e.message);
    }
  }
);

export const getTotal = createAsyncThunk(
  "cars/getTotal",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/adverts");
      const result = data.length;
      return result;
    } catch (e) {
      Notify.failure(`Server error: ${e.message}`);
      return rejectWithValue(e.message);
    }
  }
);
