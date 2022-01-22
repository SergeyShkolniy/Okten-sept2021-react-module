import React from 'react';
import {Link} from "react-router-dom";

import css from './PostDetails.module.css'


const PostDetails = ({post}) => {

    const {userId, id, title, body } = post

    return (

            <div className={css.main}>

                <h3>Post Details</h3>

                <div className={css.block}>
                    <div><b>{userId}:{id} {title}</b></div>
                    <div className={css.text}>{body}</div>
                </div>
                <Link to={'comments'}><button className={css.buttons}>All comments on the post</button></Link>

            </div>

    );
};

export {PostDetails};