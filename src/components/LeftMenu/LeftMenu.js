import React from 'react';
import css from "./LeftMenu.module.css"

const LeftMenu = () => {
    return (
        <div className={css.leftMenuContainer}>
            <div className={css.block}>
                <h3>media</h3>
            </div>
            <div className={css.leftMenuUnderline}></div>
            <div className={css.block}>
                <h3>media</h3>
                <div className={css.leftMenuLink}>Movies</div>
                <div  className={css.leftMenuLink}>TV Shows</div>
                <div  className={css.leftMenuLink}>Music</div>
                <div  className={css.leftMenuLink}>AudioBooks</div>
                <div  className={css.leftMenuLink}>Movies</div>
            </div>
            <div className={css.leftMenuUnderline}></div>
            <div className={css.block}>
                <h3>media</h3>
            </div>
        </div>
    );
};

export {LeftMenu};