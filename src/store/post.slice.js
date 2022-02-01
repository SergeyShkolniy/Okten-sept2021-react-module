import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userPostsServices} from "../services";

const initialState = {
    posts: []

}

export const getByIdPosts = createAsyncThunk(
    'posts/getByIdUsers',
    async (id, {rejectWithValue}) => {
        const posts = await userPostsServices.getById(id);
        return posts
    }
)


const postSlice = createSlice({

    name: 'posts',
    initialState,

    reducers:{

    },

    extraReducers: {

        [getByIdPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
        },
        [getByIdPosts.rejected]: (state, action) => {

        }
    }
});

const postReducer = postSlice.reducer;

export default postReducer