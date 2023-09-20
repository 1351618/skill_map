// todoSlice.js
//  обработчики полученных данных

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },

    reducers: {
        changeStyle(state, action) {
            state.todos = action.payload.text;
        },
        // следующие новые данные
        // toggleTodo(state, action) {
        //     state.todos = action.payload.text;
        // },
    },
});

export const { toggleTodo, changeStyle } = todoSlice.actions;

export default todoSlice.reducer;
