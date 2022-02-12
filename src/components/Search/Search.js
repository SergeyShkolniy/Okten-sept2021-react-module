import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getBySearch} from "../../store";
import css from "./Search.module.css"

const Search = () => {

    const [search, setSearch] = useState()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBySearch(search));
    }, [dispatch, search])

    const inputSearchValue = useRef()

    const searchValue = (e) => {
        e.preventDefault();
        setSearch(inputSearchValue.current.value)
        inputSearchValue.current.value = '';
    }


    return (
        <div className={css.search}>
            <Link to="/">
                <img
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
                    className={css.logo}/>
            </Link>
            <form>
                <input className={css.inputSearch} type="text" ref={inputSearchValue} placeholder="Search your interesting... "/>
                <button className={css.buttonSearch} onClick={searchValue}> <Link to="/search">Search</Link></button>

            </form>
        </div>
    );
};

export {Search};