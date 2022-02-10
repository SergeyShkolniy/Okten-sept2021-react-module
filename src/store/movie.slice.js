import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServices} from "../services";

const initialState = {
    movies: [],
    movie: {},
    search: []
}

export const getAllMovies = createAsyncThunk(
    'movies/getAllMovies',
    async (page, {rejectWithValue}) => {
        const movies = await movieServices.getAll(page);
        console.log(page)
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

export const getBySearch = createAsyncThunk(
    'movies/getBySearch',
    async (title, {rejectWithValue}) => {
        const search = await movieServices.searchByTitle(title);
        console.log(title)
        return search
    }
)
// export const getBySearchPage = createAsyncThunk(
//     'movies/getBySearchPage',
//     async ({title,page}, {rejectWithValue}) => {
//         const searchPage = await movieServices.searchByPage(title,page);
//         console.log(title)
//         console.log(page)
//         return searchPage
//     }
// )

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

        },
        [getBySearch.fulfilled]: (state, action) => {
            state.search = action.payload
        },
        [getBySearch.rejected]: (state, action) => {

        },
        // [getBySearchPage.fulfilled]: (state, action) => {
        //     state.search = action.payload
        // },
        // [getBySearchPage.rejected]: (state, action) => {
        //
        // }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer