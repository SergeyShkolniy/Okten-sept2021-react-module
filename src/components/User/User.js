import React from 'react';

import css from './User.module.css'

const User = ({user}) => {

    const {id, name,username,email} = user;

    return (
        <div className={css.container}>
            {id}) --- {name} --- {username} --- {email}
        </div>
    );
};

export {User};