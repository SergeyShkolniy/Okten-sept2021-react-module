import {Routes, Route} from "react-router-dom"
import './App.css'
import {Layout} from "./components";



const App = () => {
    return (
        <div className={"flex"}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                </Route>
            </Routes>
        </div>
    );
};

export default App;