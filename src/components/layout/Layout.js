import {Outlet} from "react-router-dom";

import css from "./Layout.module.css"
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {

    return (

        <div>
            <div><Header/></div>
            <div className={css.outlet}><Outlet/></div>
            <div><Footer/></div>
        </div>
    );
};

export default Layout;