import React from 'react';
import css from "./LeftMenu.module.css"
import {Link, NavLink} from "react-router-dom";
import {Genres} from "../Genres/Genres";

const LeftMenu = () => {





    return (
        <div className={css.leftMenuContainer}>
            <div className={css.blockAvatar}>
                <div><img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"/></div>
                <div>
                    <p>Sergey Shkolniy</p>
                    <span>Odessa, UA</span>
                </div>
            </div>
            <div className={css.leftMenuUnderline}></div>
            <div className={css.block}>
                <h3>media</h3>
                <NavLink to='/movies'>Movies</NavLink>


                <div className={css.leftMenuLink}>Movies</div>
                <div  className={css.leftMenuLink}>TV Shows</div>
                <div  className={css.leftMenuLink}>Music</div>
                <div  className={css.leftMenuLink}>AudioBooks</div>
                <div  className={css.leftMenuLink}>Movies</div>

            </div>
            <div className={css.leftMenuUnderline}></div>
            <div className={css.block}>
                <Genres/>
            </div>
        </div>
    );
};

export {LeftMenu};