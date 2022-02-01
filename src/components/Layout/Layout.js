import React from 'react';
import {Outlet} from "react-router-dom";

import css from './Layout.module.css'

const Layout = () => {
    return (
        <>
            <div className={css.outlet}><Outlet/></div>
        </>
    );
};

export {Layout};