import React from 'react';
import {Outlet} from "react-router-dom"
import css from "./Main.module.css"


const Main = () => {
    return (
        <div className={css.mainContainer}>

            <Outlet/>

        </div>
    );
};

export {Main};