import './App.css'
import {useState} from "react";

import Users from "./components/users/Users";
import UserDetails from "./components/userDetails/UserDetails";
import Posts from "./components/posts/Posts";


const App = () => {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user)
        setUserId(null)
    }

    const getUserId = (id) => {
        setUserId(id)

    }

    return (

        <div className={'container'}>

            <div className={'flex'}>
                <div><Users getUser = {getUser}/></div>
                <div className={'details'}>
                    <h3 className={'details-title'}>Детальная информация о пользователе</h3>
                    {user && <UserDetails user = {user} getUserId = {getUserId}/>}
                </div>
            </div>

            <div>
                {userId && <Posts userId={userId}/>}
            </div>

        </div>

    );
};

export default App;