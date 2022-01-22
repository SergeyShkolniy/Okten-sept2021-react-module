import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import css from './UsersPage.module.css'
import {userServices} from "../../services";
import {User} from "../../components";

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

export {UsersPage};