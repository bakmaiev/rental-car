import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://648ca2888620b8bae7ed2a6b.mockapi.io/";

export const getCars = createAsyncThunk(
  "cars/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/adverts");
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
