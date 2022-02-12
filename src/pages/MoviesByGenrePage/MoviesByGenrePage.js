import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from "./MoviesByGenrePage.module.css";
import {getMoviesByGenre} from "../../store";
import {MoviesGenre} from "../../components";

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
            <h3 className={css.title}>{genres.genres.map(genre => genre.id == id && genre.name)}</h3>
            {movies.results && <div className={css.flex}>{movies.results.map(movie => <MoviesGenre key={movie.id}
                                                                                           movie={movie}/>)}</div>}
            <div className={css.buttonFlex}>
                <button className={css.button} onClick={back}>back</button>
                <div className={css.flex}> <div className={css.page}>{pages}</div>  of  <div className={css.page}>{pagesAll}</div> </div>
                <button className={css.button} onClick={forward}>forward</button>
            </div>
        </div>
    );
};

export {MoviesByGenrePage};