import {Routes, Route, Navigate} from 'react-router-dom'

import './App.css'
import {Layout} from "./components";
import {EpisodeDetailsPage, EpisodesPage, NotFoundPage} from "./pages";

const App = () => {
    return (
        <div>

            <Routes>

                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<Navigate to={'episode'}/>}/>

                    <Route path={'episode'} element={<EpisodesPage/>}/>
                    <Route path={'episodeDetails'} element={<EpisodeDetailsPage/>}/>

                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>

            </Routes>

        </div>
    );
};

export default App;