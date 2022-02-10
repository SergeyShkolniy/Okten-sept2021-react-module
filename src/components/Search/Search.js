import React, {useEffect, useRef, useState} from 'react';
import css from "./Search.module.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getByIdMovie, getBySearch, getBySearchPage} from "../../store/movie.slice";

const Search = () => {

    const [search, setSearch] = useState()
    console.log(search)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBySearch(search));
    }, [dispatch, search])

    // useEffect(() => {
    //     dispatch(getBySearchPage({title:search}));
    //     console.log(search)
    // }, [dispatch, search])

    const inputSearchValue = useRef()

    const searchValue = (e) => {
        e.preventDefault();
        setSearch(inputSearchValue.current.value)
        inputSearchValue.current.value = '';
    }


    return (
        <div className={css.search}>
            <div>ssssssssssssss</div>
            <Link to="/">
                <img
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
                    className={css.logo}/>
            </Link>
            <form>
                <input type="text" ref={inputSearchValue} placeholder="Search your interesting... "/>

                    <button onClick={searchValue}> <Link to="/search">Search</Link></button>

            </form>
        </div>
    );
};

export {Search};