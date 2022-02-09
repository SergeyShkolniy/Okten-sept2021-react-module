import React from 'react';
import css from "./MoviesListCard.module.css"
import {Link} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {title, poster_path} = movie


    return (
        <div className={css.block}>
            <Link to={'/moviesDetails'} state={movie}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="title"/>
                <div>{title}</div>
            </Link>


        </div>
    );
};

export {MoviesListCard};