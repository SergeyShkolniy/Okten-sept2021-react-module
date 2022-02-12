import React from "react";
import {Link} from "react-router-dom";

import css from "./SearchMovie.module.css"

const SearchMovie = ({searchMovie}) => {
    const {title, poster_path, vote_average} = searchMovie

    return (
        <div className={css.container}>
            <Link className={css.uyuyu} to={`/movies/${searchMovie.id}`}>

                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="title" title={title}/>
                <div className={css.flex}>
                    <div className={css.title}>{title}</div>
                    <div>{vote_average}</div>
                </div>

            </Link>


        </div>
    );
};

export {SearchMovie};
