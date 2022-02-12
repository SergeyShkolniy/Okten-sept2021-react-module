import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from "./MoviesListPage.module.css"
import {getAllMovies} from "../../store";
import {MoviesListCard} from "../../components";

const MoviesListPage = () => {

    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const {movies} = useSelector(state => state.movies);

    const xxx = movies.results
    const pages = movies.page
    const pagesAll = movies.total_pages

    useEffect(() => {
        dispatch(getAllMovies(page));
    }, [dispatch, page])

    const forward = () => {
        if (page < 510) {
            setPage(page + 1);
        }
    };

    const back = () => {
        if (page > 1) {
            setPage(page - 1);
        }

    };

    return (

        <>
            <h3 className={css.title}>All movies</h3>
            {xxx && <div className={css.flex}>{movies.results.map(movie => <MoviesListCard key={movie.id}
                                                                                           movie={movie}/>)}</div>}
            <div className={css.buttonFlex}>
                <button className={css.button} onClick={back}>back</button>
                <div className={css.flex}> <div className={css.page}>{pages}</div>  of  <div className={css.page}>{pagesAll}</div> </div>
                <button className={css.button} onClick={forward}>forward</button>
            </div>
        </>

    );
};

export {MoviesListPage};