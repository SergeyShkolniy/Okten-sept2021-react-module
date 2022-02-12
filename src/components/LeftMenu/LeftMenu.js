import React from "react";

import css from "./LeftMenu.module.css"
import {NavLink} from "react-router-dom";
import {Genres} from "../Genres/Genres";
import {useTheme} from "../../hooks/useTheme";

const LeftMenu = () => {

    const {theme, setTheme} = useTheme()

    const lightClick = () => {
        setTheme('light')
    }
    const darkClick = () => {
        setTheme('dark')
    }

    return (
        <div className={css.leftMenuContainer}>
            <div className={css.user}>
                <div className={css.blockAvatar}>
                    <div><img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"/></div>
                    <div>
                        <p>Sergey Shkolniy</p>
                        <span>Odessa, UA</span>
                    </div>
                </div>
                <div className={css.blockTheme}>
                    <p onClick={lightClick}>Light theme</p>
                    <p onClick={darkClick}>Dark theme</p>
                </div>
            </div>
            <div className={css.leftMenuUnderline}></div>
            <div className={css.block}>
                <h3>media</h3>
                <NavLink to='/movies' ><div className={css.leftMenuLink}>Movies</div></NavLink>
            </div>
            <div className={css.leftMenuUnderline}></div>
            <div className={css.block}>
                <h3>genres</h3>
                <Genres/>
            </div>
        </div>
    );
};

export {LeftMenu};