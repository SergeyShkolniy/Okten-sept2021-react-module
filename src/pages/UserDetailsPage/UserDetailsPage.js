import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet} from "react-router-dom";

import {userServices} from "../../services";
import {UserDetails} from "../../components";

const UserDetailsPage = () => {

    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }

        userServices.getById(id).then(value => setUser({...value}))

    }, [id])


    return (
        <div>

            { user && <UserDetails user = {user}/>}

            <Outlet/>

        </div>
    );
};

export {UserDetailsPage};