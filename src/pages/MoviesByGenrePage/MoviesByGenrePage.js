import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "../../components/MoviesListCard/MoviesListCard";
import {getAllMovies} from "../../store/movie.slice";
import {getMoviesByGenre} from "../../store/genres.slice";
import css from "./MoviesByGenrePage.module.css";
import {MoviesGenre} from "../../components/MoviesGenre/MoviesGenre";

const MoviesByGenrePage = () => {

    const {id} = useParams();

    const {genres, movies} = useSelector(state => state.genres);


    const xxxx = movies.results
    const pages = movies.page
    const pagesAll = movies.total_pages


    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getMoviesByGenre({id, page}));
    }, [dispatch, id, page])

    const forward = () => {
        if (page< 510){
            setPage(page + 1);
        }
    };

    const back = () => {
        if (page > 1){
            setPage(page - 1);
        }

    };

    return (
        <div>
            <h3>{genres.genres.map(genre => genre.id == id && genre.name)}</h3>
            {movies.results && <div className={css.flex}>{movies.results.map(movie => <MoviesGenre key={movie.id}
                                                                                           movie={movie}/>)}</div>}
            <div className={css.buttonFlex}>
                <button className={css.button} onClick={back}>back</button>
                <div>{pages} of {pagesAll}</div>
                <button className={css.button} onClick={forward}>forward</button>
            </div>
        </div>
    );
};

export {MoviesByGenrePage};