import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./movie.slice";

const store = configureStore({

    reducer: {
        movies: movieReducer
    }
})

export default store;