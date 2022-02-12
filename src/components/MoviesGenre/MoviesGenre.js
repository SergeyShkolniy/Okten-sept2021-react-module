import React from "react";
import {Link} from "react-router-dom";

import css from "./MoviesGenre.module.css"

const MoviesGenre = ({movie}) => {

    const {title, poster_path, vote_average} = movie

    return (
        <div className={css.container}>
            <Link className={css.uyuyu} to={`/movies/${movie.id}`}>

                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="title" title={title}/>
                <div className={css.flex}>
                    <div className={css.title}>{title}</div>
                    <div>{vote_average}</div>
                </div>

            </Link>


        </div>
    );
};

export {MoviesGenre};