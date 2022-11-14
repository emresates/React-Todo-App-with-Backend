import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "./Todos/TodosSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
