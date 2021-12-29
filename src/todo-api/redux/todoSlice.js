import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

// Reducer Thunk
export const fetchTodo = createAsyncThunk("TODO/FETCH", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return response.data;
});

export const addTodo = createAsyncThunk("TODO/ADD", async (title) => {
  const newTodo = {
    id: nanoid(),
    title,
    completed: false,
  };

  await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);

  return newTodo;
});

export const deleteTodo = createAsyncThunk("TODO/DELETE", async (todoId) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  return todoId;
});

const todoSlice = createSlice({
  name: "TODO",
  initialState: {
    todoList: [],
  },
  reducers: {
    toggleTodo(state, action) {
      const todoId = action.payload;
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
    deleteTodo(state, action) {
      const todoId = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== todoId);
    },
  },
  extraReducers: {
    [fetchTodo.pending]: (state, action) => {
      console.log("Fetching todos from backend ....");
    },
    [fetchTodo.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    },
    [fetchTodo.rejected]: (state, action) => {
      console.log("Failed to get todos!!!");
    },

    [addTodo.fulfilled]: (state, action) => {
      state.todoList.unshift(action.payload);
    },

    [deleteTodo.fulfilled]: (state, action) => {
      const todoId = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== todoId);
    },
  },
});

export const { toggleTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
