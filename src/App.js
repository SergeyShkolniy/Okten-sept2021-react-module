import {Routes, Route, Navigate} from "react-router-dom"
import './App.css'
import {Layout} from "./components";
import {MoviesListPage} from "./pages/MoviesListPage/MoviesListPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage/MovieDetailsPage";
import {SearchMovies} from "./pages/SearchMovies/SearchMovies";
import {TestPage} from "./pages/testPage/TestPage";
import {MoviesByGenrePage} from "./pages/MoviesByGenrePage/MoviesByGenrePage";




const App = () => {
    return (
        <div className={"flex"}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<Navigate to={'movies'}/>}/>

                    <Route path={'movies'} element={<MoviesListPage/>}/>
                    <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'search'} element={<SearchMovies/>}/>
                    <Route path={'test'} element={<TestPage/>}/>
                    <Route path={'genres/:id'} element={<MoviesByGenrePage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;