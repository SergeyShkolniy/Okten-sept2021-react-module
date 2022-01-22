import {Routes, Route, Navigate} from "react-router-dom"

import './App.css'
import {Layout} from "./components";
import {
    AlbumsPage,
    NotFoundPage, PhotosPage,
    PostCommentsPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UserPostPage,
    UsersPage
} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostPage/>}/>
                        </Route>

                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>

                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
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