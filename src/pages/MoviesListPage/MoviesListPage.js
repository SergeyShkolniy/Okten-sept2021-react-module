import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../../store/movie.slice";
import css from "./MoviesListPage.module.css"
import {MoviesListCard} from "../../components/MoviesListCard/MoviesListCard";

const MoviesListPage = () => {



    const {movies} = useSelector(state => state.movies);

    const xxx = movies.results
    const pages = movies.page
const pagesAll = movies.total_pages







    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(page));
    }, [dispatch, page])

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
            <h3>All movies</h3>
            {xxx && <div className={css.flex}>{movies.results.map(movie => <MoviesListCard key = {movie.id} movie={movie}/>)}</div>}
            <div className={css.buttonFlex}>
                <button className={css.button} onClick={back}>back</button>
                <div>{pages} of {pagesAll}</div>
                <button className={css.button} onClick={forward}>forward</button>
            </div>
        </div>
    );
};

export {MoviesListPage};