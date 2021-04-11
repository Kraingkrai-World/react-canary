import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import appReducer from "./app/";
import counterReducer from "./counter/";

const store = configureStore({
   reducer: {
      app: appReducer,
      counter: counterReducer,
   },
   middleware: () => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
