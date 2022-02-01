import {configureStore} from "@reduxjs/toolkit";

import userReducer from "./user.slice";
import postReducer from "./post.slice";

const store = configureStore({

    reducer: {

        users: userReducer,
        posts: postReducer

    }
})

export default store;