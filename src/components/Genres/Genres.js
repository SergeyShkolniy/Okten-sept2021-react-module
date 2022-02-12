import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getGenres} from "../../store";
import {Genre} from "../Genre/Genre";

const Genres = () => {

    const {genres} = useSelector(state => state.genres.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    return (
        <div>
            {genres && <div>{genres.map(genre => <Genre key = {genre.id} genre={genre}/>)}</div>}
        </div>
    );
};

export {Genres};