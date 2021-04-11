import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export const pending_status = createAction("pending");
export const failed_status = createAction("failed");
export const success_status = createAction("success");

export type RootStoreType = RootState;
export interface IPropsState {
   isLoading: boolean;
   status_request: string;
   message_request : string
}

const initialState = {
   isLoading: false,
   status_request: "idle",
   message_request: "",
} as IPropsState;

const appSlice = createSlice({
   name: "app",
   initialState,
   reducers: {
      setLoading: (state, { payload }: PayloadAction<boolean>) => {
         if (state.isLoading === payload) return;
         state.isLoading = payload;
      },
   },
   extraReducers: {
      // @ts-expect-error
      [pending_status]: (state) => {
         state.isLoading = true;
         state.status_request = "pending";
         state.message_request = "";
      },
      // @ts-expect-error
      [failed_status]: (state) => {
         state.isLoading = false;
         state.status_request = "failed";
         state.message_request = "failed_status";
      },
      // @ts-expect-error
      [success_status]: (state) => {
         state.isLoading = false;
         state.status_request = "success";
         state.message_request = "success_status";
      },
   },
});

export const { setLoading } = appSlice.actions;
export default appSlice.reducer;
