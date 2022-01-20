import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom"

import {userServices} from "../../services/user.service";
import User from "../../components/user/User";
import css from "./UserPage.module.css"



const UsersPage = () => {

  const [users, setUsers] = useState([])

    useEffect(()=>{

        userServices.getAll().then(value => setUsers ([...value]))

    },[])

    return (
        <div className={css.main}>
            <div className={css.postPageLeft}>
                <h3>All users</h3>
                <div>{users.map(value => <User key = {value.id} user = {value}/>)}</div>
            </div>
            <div className={css.postPageRight}>
                <Outlet/>
            </div>

        </div>
    );
};

export default UsersPage;