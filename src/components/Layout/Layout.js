import React from 'react';
import {Outlet} from "react-router-dom";

import css from './Layout.module.css'
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";


const Layout = () => {

    return (

        <>
            <Header/>
            <div className={css.outlet}><Outlet/></div>
            <Footer/>
        </>
    );
};

export {Layout};