import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export type RootStoreType = RootState;
export interface IPropsState {
   value: number;
}

const initialState = { value: 1 } as IPropsState;

const counterSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
      incremented: (state) => {
         state.value += 1;
      },
      decremented: (state) => {
         state.value -= 1;
      },
   },
});

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer;
