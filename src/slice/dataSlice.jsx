import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers:{
     // getPokemon
    //  [getPokemon.pending]: (state) => {
    //     state.loading = true;
    //     state.error = "";
    //   },
    //   [getPokemon.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     state.data = action.payload;
    //   },
    //   [getPokemon.rejected]: (state, action) => {
    //     state.error = action.error;
    //     state.loading = false;
    //   },
  }
});

// Action creators are generated for each case reducer function
export const { decrement } = dataSlice.actions;

export default dataSlice.reducer;
