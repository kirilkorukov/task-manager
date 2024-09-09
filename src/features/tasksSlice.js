import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const dummyTasks = [
  { id: "Vx4b_2", text: "Go to dentist", isCompleted: true },
  { id: "k5Qz8d", text: "Buy groceries", isCompleted: false },
  { id: "r9Yc1n", text: "Clean the kitchen", isCompleted: true },
  { id: "H3wE2f", text: "Finish React project", isCompleted: false },
  { id: "y6bT9u", text: "Read a book", isCompleted: true },
  { id: "J7vLp5", text: "Call mom", isCompleted: false },
  { id: "mZ9Nq3", text: "Walk the dog", isCompleted: true },
  { id: "dK4L7w", text: "Pay electricity bill", isCompleted: false },
  { id: "P1rH6a", text: "Prepare lunch", isCompleted: true },
  { id: "xC8uWz", text: "Attend team meeting", isCompleted: false }
];

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: dummyTasks,
    },
    reducers: {
        addNewTask: (state, action) => {
            const newTask = {
                id: nanoid(6),
                text: action.payload,
                isCompleted: false
            };
            state.tasks = [newTask, ...state.tasks];
        },
        removeTask: (state, action) => {
            const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
            state.tasks = updatedTasks;
        },
        changeIsCompleted: (state, action) => {
            const updatedTasks = state.tasks.map(task => 
                task.id === action.payload
                ? { ...task, isCompleted: !task.isCompleted }
                : task);
            state.tasks = updatedTasks;
        }
    },
});

export const { addNewTask, removeTask, changeIsCompleted } = tasksSlice.actions;

export default tasksSlice.reducer;