import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userServices} from "../services";

const initialState = {
    users: [],
    user: {}
}

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_, {rejectWithValue}) => {
        const users = await userServices.getAll();
        return users
    }
)

export const getByIdUsers = createAsyncThunk(
    'users/getByIdUsers',
    async (id, {rejectWithValue}) => {
        const user = await userServices.getById(id);
        return user
    }
)


const userSlice = createSlice({

    name: 'users',
    initialState,

    reducers:{

    },

    extraReducers: {

        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [getByIdUsers.rejected]: (state, action) => {

        },
        [getByIdUsers.fulfilled]: (state, action) => {
            state.user = action.payload
        },
        [getByIdUsers.rejected]: (state, action) => {

        }
    }
});

const userReducer = userSlice.reducer;

export default userReducer