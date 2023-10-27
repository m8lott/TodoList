import { createSlice } from "@reduxjs/toolkit";
import Task from "../models/task";

interface initialState {
  tasks: Task[];
  addFormToggle: boolean;
  editToggle: boolean;
}

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
    addFormToggle: false,
    editToggle: false,
  } as initialState,
  reducers: {
    addTasks: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload,
        favorite: false,
        checked: false,
        edit: false,
      });
      localStorage.setItem("tasks", JSON.stringify(state?.tasks));
    },
    editTask: (state, action) => {
      state.tasks.map((task) => {
        if (task.id === action.payload.id) task.title = action.payload.title;
      });
      localStorage.setItem("tasks", JSON.stringify(state?.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state?.tasks));
    },
    setAddFormToggle: (state) => {
      state.addFormToggle = !state.addFormToggle;
      localStorage.setItem("tasks", JSON.stringify(state?.tasks));
    },
    setEditToggle: (state, action) => {
      state.editToggle = !state.editToggle;
      state.tasks.map((task) => {
        if (task.id === action.payload) task.edit = !task.edit;
      });
      localStorage.setItem("tasks", JSON.stringify(state?.tasks));
    },
    setFavorite: (state, action) => {
      state.tasks.map((task) => {
        if (task.id === action.payload) task.favorite = !task.favorite;
      });
      localStorage.setItem("tasks", JSON.stringify(state?.tasks));
    },
    setComplet: (state, action) => {
      state.tasks.map((task) => {
        if (task.id === action.payload) task.checked = !task.checked;
      });
      localStorage.setItem("tasks", JSON.stringify(state?.tasks));
    },
    updateTasks: (state, action) => {
      state.tasks = action.payload;
    },
    reloadEdit: (state, action) => {
      state.editToggle = action.payload;
    },
  },
});

export const reducer = todosSlice.reducer;
export const {
  addTasks,
  deleteTask,
  editTask,
  setAddFormToggle,
  setFavorite,
  setComplet,
  setEditToggle,
  updateTasks,
  reloadEdit,
} = todosSlice.actions;
