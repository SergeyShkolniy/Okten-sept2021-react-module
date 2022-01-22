import React from 'react';
import {Link} from "react-router-dom";

import css from './UserDetails.module.css'

const UserDetails = ({user}) => {

    const {id, name, username, email, address, phone, website,company } = user

    return (
        <div>

            <h3>User details</h3>
            <ul className={css.card}>
                <li><b>id: </b>{id}</li>
                <li><b>name: </b>{name}</li>
                <li><b>username: </b>{username}</li>
                <li><b>email: </b>{email}</li>
                <ul><b>address:</b>
                    <li><b>suite: </b>{address.suite}</li>
                    <li><b>city: </b>{address.city}</li>
                    <li><b>zipcode: </b>{address.zipcode}</li>
                    <li><b>street: </b>{address.street}
                        <ul><b>geo:</b>
                            <li><b>lat: </b>{address.geo.lat}</li>
                            <li><b>lng: </b>{address.geo.lng}</li>
                        </ul>
                    </li>
                </ul>
                <li><b>phone: </b>{phone}</li>
                <li><b>website: </b>{website}</li>
                <ul><b>company:</b>
                    <li><b>name: </b>{company.name}</li>
                    <li><b>lng: </b>{company.catchPhrase}</li>
                    <li><b>lng: </b>{company.bs}</li>
                </ul>
            </ul>

            <Link to={'posts'}><button className={css.button}>All posts user: <b>{name}</b></button></Link>
        </div>


    );
};

export {UserDetails};