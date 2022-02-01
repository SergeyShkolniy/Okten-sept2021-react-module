import React from 'react';

import css from './UserPost.module.css'

const UserPost = ({post}) => {

    const {userId, id, title, body} = post

    return (

        <div className={css.main}>

            <div><b>{userId}:{id}</b></div>
            <div><b>title:</b> {title}</div>
            <div className={css.text}>{body}</div>

        </div>

    );
};

export {UserPost};