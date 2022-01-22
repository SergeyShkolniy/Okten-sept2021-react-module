import React from 'react';

import css from './Comment.module.css'

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment

    return (
        <div className={css.main}>

            <div><b>{postId}:{id}</b></div>
            <div><b>name:</b> {name}</div>
            <div><b>email:</b> {email}</div>
            <div className={css.text}>{body}</div>

        </div>
    );
};

export {Comment};