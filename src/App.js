import {Routes, Route, Navigate} from "react-router-dom"

import "./App.css"

import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import UsersPage from "./pages/usersPage/UsersPage";
import PostsPage from "./pages/postsPage/PostsPage";
import Layout from "./components/layout/Layout";
import SinglePostPage from "./pages/singlePostPage/SinglePostPage";
import PostCommentsPage from "./pages/postCommentsPage/PostCommentsPage";
import SingleUserPage from "./pages/singleUserPage/SingleUserPage";
import UserPostsPage from "./pages/userPostsPage/UserPostsPage";


const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export default App;