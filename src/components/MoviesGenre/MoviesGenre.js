import React from 'react';

import {Link} from "react-router-dom";
import css from "./MoviesGenre.module.css"

const MoviesGenre = ({movie}) => {

    const {title, poster_path} = movie

    return (
        <div className={css.block}>
            <Link to={`/movies/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="title"/>
                <div>{title}</div>
            </Link>
        </div>
    );
};

export {MoviesGenre};