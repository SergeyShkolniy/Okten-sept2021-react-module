import {Routes, Route, Navigate} from "react-router-dom"

import './App.css'
import {Layout} from "./components";
import {MoviesListPage} from "./pages";
import {MovieDetailsPage} from "./pages";
import {SearchMovies} from "./pages";
import {MoviesByGenrePage} from "./pages";


const App = () => {

    return (

       <div className={'backgroundImage'}>
           <div className={"flex"}>

               <Routes>
                   <Route path={'/'} element={<Layout/>}>

                       <Route index element={<Navigate to={'movies'}/>}/>

                       <Route path={'movies'} element={<MoviesListPage/>}/>
                       <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                       <Route path={'search'} element={<SearchMovies/>}/>
                       <Route path={'genres/:id'} element={<MoviesByGenrePage/>}/>
                   </Route>
               </Routes>
           </div>
       </div>

    );
};

export default App;