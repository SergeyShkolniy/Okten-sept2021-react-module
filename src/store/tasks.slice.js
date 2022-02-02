import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,

    reducers: {
        addTask: (state, action) => {
            if (action.payload.data.newTodo !== '' ){
                state.tasks.push({
                    id: new Date().getTime(),
                    ...action.payload.data,
                    status: false
                })
            }
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        },

        deleteAllTasks: (state, action) => {
            state.tasks = [];
        },

        deleteDoneTasks: (state, action) => {
            state.tasks = state.tasks.filter((task)=>task.status === false)
        },

        doneTask: (state, action) => {
           const task = state.tasks.find(task => task.id === action.payload.id)
            task.status = !task.status
        }
    }
});

const taskReducer = tasksSlice.reducer;

export const {addTask, deleteTask,deleteAllTasks, deleteDoneTasks, doneTask} = tasksSlice.actions;

export default taskReducer