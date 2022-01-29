import {useEffect, useState} from "react";

import './App.css'
import {Form, Users} from "./components";
import {userService} from "./services/user.service";

const App = () => {

    const [users, setUsers] = useState([]);
    const [filterOfUsers, setFilterOfUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers([...value])
            setFilterOfUsers([...value]);
        });
    }, []);

    const getFilter = (data) => {
        let filterArr = [...users];

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()));
        }
        if (data.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()));
        }
        if (data.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()));
        }
        setFilterOfUsers(filterArr);

    }

        return (
        <div className={'wrapper'}>

            <Form getFilter={getFilter}/>
            <Users users={filterOfUsers}/>

        </div>
    );
};

export default App;