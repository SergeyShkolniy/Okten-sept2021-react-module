import {Routes, Route, Navigate} from "react-router-dom";

import './App.css'
import {UserDetailsPage, UserPostsPage, UsersPage} from "./pages";
import {Layout} from "./components";



const App = () => {


    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;