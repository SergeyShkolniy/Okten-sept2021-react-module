import './App.css';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";


const App = () => {
    return (
        <div className={'wrapper'}>
            <div className={'flexbox'}>
                <div><Users/></div>
                <div className={'posts'}><Posts/></div>
            </div>
            <div><Comments/></div>
        </div>
    );
};

export default App;