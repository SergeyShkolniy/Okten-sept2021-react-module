import React from 'react';
import {User} from "../User/User";

import css from './Users.module.css'

const Users = ({users}) => {
    return (
        <div className={css.container}>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export {Users};