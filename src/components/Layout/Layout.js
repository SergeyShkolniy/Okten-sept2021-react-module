import React from "react";
import css from "./Layout.module.css"
import {LeftMenu} from "../LeftMenu/LeftMenu";
import {Main} from "../Main/Main";

const Layout = () => {
    return (
        <div className={css.layoutContainer}>
            <LeftMenu/><Main/>
        </div>
    );
};

export {Layout};