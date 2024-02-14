import { createSlice } from "@reduxjs/toolkit";

const rootReducer = createSlice({
    name: "rootTest",
    initialState: {counter: 0},
    reducers: {
      increment: (state, action) => {
        state.counter = state.counter + 1;
      },
      decrement: (state, action) => {
        state.counter = state.counter - 1;
        }
      }
    });
    
    export const {increment, decrement} = rootReducer.actions
    export default rootReducer.reducer