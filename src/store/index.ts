import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./todosSlice";


export const store = configureStore({
  reducer: {
    todos: reducer,
  }
});
