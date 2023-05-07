import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  test: 0,
  data: [],
  data2:[],
  error: "",
  loading: false,
};

export const getPokemon = createAsyncThunk("pokemon/ditto", async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto", {
    headers: {
      "Content-Type": "Application/json",
    },
  });
  return response.data;
});


export const postPokemon = createAsyncThunk("postPokemon", async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto", {
    headers: {
      "Content-Type": "Application/json",
    },
  });
  return response.data;
});

// axios method post example
// export const getPokemon = createAsyncThunk("pokemon/ditto", async () => {
//   const response = await axios.post(
//     "https://pokeapi.co/api/v2/pokemon/ditto",
//     {
//       data: "test",
//     },
//     {
//       headers: {
//         "Content-Type": "Application/json",
//       },
//     }
//   );
//   return response.data;
// });

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    SET_VALUE: (state, action) => {
      state.test = action.payload;
    },
  },
  extraReducers: {
    // getPokemon
    [getPokemon.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [getPokemon.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getPokemon.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    // postPokemon
    [postPokemon.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [postPokemon.fulfilled]: (state, action) => {
      state.loading = false;
      state.data2 = action.payload;
    },
    [postPokemon.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_VALUE } = testSlice.actions;

export default testSlice.reducer;
