import React, {useEffect} from 'react';
import {Outlet, useParams} from "react-router-dom"

import {UserDetails} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {getByIdUsers} from "../../store";

const UserDetailsPage = () => {
    const {id} = useParams();

    const {user} = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getByIdUsers(id))

    }, [dispatch, id])

    return (
        <>

            { user && <UserDetails user = {user}/>}

            <Outlet/>

        </>
    );
};

export {UserDetailsPage};