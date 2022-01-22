import React from 'react';
import {Link} from "react-router-dom";

import css from './User.module.css';


const User = ({user}) => {

    const {id, name} = user

    return (

        <div className={css.main}>

            <div>{id}) {name}</div>

            <div className={css.flex}>

                <Link to={id.toString()} state={user}>
                    <button>user details</button>
                </Link>

                <Link to={`${id.toString()}/albums`} >
                    <button>albums</button>
                </Link>

            </div>

        </div>

    );
};

export {User};