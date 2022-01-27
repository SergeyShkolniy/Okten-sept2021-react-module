import React from 'react';
import {Link} from "react-router-dom";

import css from './Episode.module.css'

const Episode = ({episodeInfo}) => {

    const { name, air_date, episode} = episodeInfo

    return (
        <div className={css.container}>
            <div><b>{name}</b></div>
            <div><b>Episode :</b> {episode}</div>
            <div><b>Air date :</b> {air_date}</div>
            <Link to={'/episodeDetails'} state={episodeInfo}>Episode Details</Link>

        </div>
    );
};

export {Episode};