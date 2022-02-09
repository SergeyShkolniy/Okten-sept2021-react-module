import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServices} from "../services";

const initialState = {
    movies: [],
    movie: {}
}

export const getAllMovies = createAsyncThunk(
    'movies/getAllMovies',
    async (page, {rejectWithValue}) => {
        const movies = await movieServices.getAll(page);
        console.log(movies)
        return movies
    }
)

export const getByIdMovie = createAsyncThunk(
    'movies/getByIdMovie',
    async (id, {rejectWithValue}) => {
        const movie = await movieServices.getById(id);
        return movie
    }
)

const movieSlice = createSlice({

    name: 'movies',
    initialState,

    extraReducers: {

        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {

        },
        [getByIdMovie.fulfilled]: (state, action) => {
            state.movie = action.payload
        },
        [getByIdMovie.rejected]: (state, action) => {

        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer