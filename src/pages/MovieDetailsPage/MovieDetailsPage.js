import React from 'react';
import {useLocation} from "react-router-dom";
import css from "./MovieDetails.module.css"

const MovieDetailsPage = () => {

    const {state} = useLocation();
    console.log(state)
    const {poster_path, title, release_date, overview, vote_average} = state

    return (
        <div className={css.MovieDetailsPage}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
            <div className={css.column}>
                <h2>{title}</h2>
                <div>release date: {release_date}</div>
                <div>overview: {overview}</div>
                <div>vote_average: {vote_average}</div>
            </div>
        </div>
    );
};

export {MovieDetailsPage};