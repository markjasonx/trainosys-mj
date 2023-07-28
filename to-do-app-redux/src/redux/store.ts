import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './reducer'; //tasksReducer is just a variable not a const

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

// Define the RootState type to represent the overall state of the Redux store
export type RootState = ReturnType<typeof store.getState>;
export default store;