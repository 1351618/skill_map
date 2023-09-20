//todo configureStore.js
// хранилище

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo_slice";

export default configureStore({
    reducer: {
        todos: todoReducer,
    },
});
