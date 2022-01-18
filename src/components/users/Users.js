import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import User from "../user/User";

const Users = ({getUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        userService.getAll()
            .then(value => setUsers(value))

    }, []);

    return (

        <div>
            {
                users.map( value => <User key = {value.id} user = {value} getUser = {getUser}/>)
            }
        </div>

    );
};

export default Users;