import React from "react";
import {Outlet} from "react-router-dom"
import css from "./Layout.module.css"
import {LeftMenu} from "../LeftMenu/LeftMenu";
import {Main} from "../Main/Main";
import {Search} from "../Search/Search";
import {Footer} from "../Footer/Footer";


const Layout = () => {
    return (
        <div className={css.layoutContainer}>
            <LeftMenu/>
            <div className={css.mainFlex}>
                <Search/>
                <Main><Outlet/></Main>
                <Footer/>
            </div>
        </div>
    );
};

export {Layout};