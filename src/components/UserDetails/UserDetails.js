import React from 'react';
import {Link} from "react-router-dom";

import css from './UserDetails.module.css'

const UserDetails = ({user}) => {

    const {id, name, username, email, phone, website} = user

    return (
        <div>

            <h3>User details</h3>
            <ul className={css.card}>
                <li><b>id: </b>{id}</li>
                <li><b>name: </b>{name}</li>
                <li><b>username: </b>{username}</li>
                <li><b>email: </b>{email}</li>
                <ul><b>address:</b>
                </ul>
                <li><b>phone: </b>{phone}</li>
                <li><b>website: </b>{website}</li>
                <ul><b>company:</b>

                </ul>
            </ul>

            <Link to={'posts'}><button className={css.button}>All posts user: <b>{name}</b></button></Link>
        </div>


    );
};

export {UserDetails};


