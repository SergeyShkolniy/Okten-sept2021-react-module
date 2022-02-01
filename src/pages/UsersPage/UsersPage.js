import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './UsersPage.module.css';
import {User} from "../../components";
import {getAllUsers} from "../../store";


const UsersPage = () => {

    const {users} = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getAllUsers())

    }, [dispatch])

    return (
        <div className={css.main}>

            <div className={css.postPageLeft}>
                <h3>All users</h3>
                <div>{users.map(user => <User key = {user.id} user = {user}/>)}</div>
            </div>
            <div className={css.postPageRight}>
                <Outlet/>
            </div>

        </div>
    );
};

export {UsersPage};