import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import css from "./SearchMovies.module.css"
import {MoviesListCard} from "../../components/MoviesListCard/MoviesListCard";
import {SearchMovie} from "../../components/SearchMovie/SearchMovie";
import {getAllMovies, getBySearch, getBySearchPage} from "../../store/movie.slice";


const SearchMovies = () => {

    const {search} = useSelector(state => state.movies);
    console.log(search)

    const searchMovies = search.results
    const pages = search.page
    const pagesAll = search.total_pages


    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getBySearchPage(page));
    // }, [dispatch, page])
    //

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
        <div>

            <h3>All search movies</h3>
            {searchMovies &&
                <div className={css.flex}>{searchMovies.map(searchMovie => <SearchMovie key={searchMovie.id} searchMovie={searchMovie}/>)}</div>}
            <div className={css.buttonFlex}>
                <button className={css.button} onClick={back}>back</button>
                <div>{pages} of {pagesAll}</div>
                <button className={css.button} onClick={forward}>forward</button>

            </div>
        </div>
    );
};
export {SearchMovies};