import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServices} from "../services";


export const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {

            const genres = await movieServices.getGenres()
            return genres

    }
)
export const getMoviesByGenre = createAsyncThunk(
    'genresSlice/getMoviesByGenre',
    async ({id,page}, {rejectWithValue}) => {
        try {
            const movies = await movieServices.getByGenreId(id,page)
            return {movies}
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

export const genresSlice = createSlice(
    {
        name: 'genresSlice',
        initialState: {
            movies: [],
            genres: []

        },
        extraReducers: {
            // [getGenres.pending]: (state) => {
            //     state.statusGenres = 'pending'
            // },
            [getGenres.fulfilled]: (state, action) => {
                state.statusGenres = 'fulfilled'
                state.genres = action.payload
            },
            [getGenres.rejected]: (state, action) => {
                state.statusGenres = 'rejected'
                state.error = action.payload
            },
            // [getMoviesByGenre.pending]: (state) => {
            //     state.statusMovies = 'pending'
            // },
            [getMoviesByGenre.fulfilled]: (state, action) => {
                state.statusMovies = 'fulfilled'
                state.movies = action.payload.movies
                state.total_pages = action.payload.movies.total_pages
            },
            [getMoviesByGenre.rejected]: (state, action) => {
                state.statusMovies = 'rejected'
                state.error = action.payload
            }

        }
    }
)

const genresReducer = genresSlice.reducer

export default genresReducer