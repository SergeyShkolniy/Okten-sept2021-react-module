import React from 'react';
import {Outlet} from 'react-router-dom'

import css from './Layout.module.css'
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";




const Layout = () => {
    return (
        <div>
            <Header/>
            <div className={css.outlet}><Outlet/></div>
            <Footer/>
        </div>
    );
};

export {Layout};