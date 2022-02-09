import {Routes, Route, Navigate} from "react-router-dom"
import './App.css'
import {Layout} from "./components";
import {MoviesListPage} from "./pages/MoviesListPage/MoviesListPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage/MovieDetailsPage";



const App = () => {
    return (
        <div className={"flex"}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<Navigate to={'movies'}/>}/>

                    <Route path={'movies'} element={<MoviesListPage/>}/>
                    <Route path={'moviesDetails'} element={<MovieDetailsPage/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export default App;