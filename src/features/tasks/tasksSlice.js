import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./localStorageTasks";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    isLoading: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    setAllDone: (state) => {
      state.tasks.forEach((task) => {
        task.done = true;
      });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    fetchExampleTasks: () => {},

    fetchExampleTasksLoading: (state) => {
      state.isLoading = true;
    },

    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.isLoading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
  fetchExampleTasks,
  fetchExampleTasksLoading,
  setTasks,
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks || [];
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export const selectIsLoading = (state) => state.tasks.isLoading;
export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
