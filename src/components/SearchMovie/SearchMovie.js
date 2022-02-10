import React from 'react';
import {Link} from "react-router-dom";
import css from "./SearchMovie.module.css"

const SearchMovie = ({searchMovie}) => {
    const {title, poster_path} = searchMovie

    return (
        <div className={css.block}>
            <Link to={`/movies/${searchMovie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="title"/>
                <div>{title}</div>
            </Link>


        </div>
    );
};

export {SearchMovie};