import React from 'react';

import css from './Album.module.css'
import {Link} from "react-router-dom";

const Album = ({album}) => {

    const {userId, id, title} = album

    return (
        <div className={css.main}>

            <div><b>{userId}:{id}</b></div>
            <div className={css.text}><b>title:</b> {title}</div>

            <Link to={`${id.toString()}/photos`} >
                <button className={css.button}>All photos on the album</button>
            </Link>

        </div>
    );
};

export {Album};