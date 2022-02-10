import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../store/genres.slice";
import css from "../MoviesListPage/MoviesListPage.module.css";
import {MoviesListCard} from "../../components/MoviesListCard/MoviesListCard";
import {Genre} from "../../components/Genre/Genre";

const TestPage = () => {

    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    console.log(genres)

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    return (
        <div>
            {genres && <div>{genres.genres.map(genre => <Genre key = {genre.id} genre={genre}/>)}</div>}
        </div>
    );
};

export {TestPage};