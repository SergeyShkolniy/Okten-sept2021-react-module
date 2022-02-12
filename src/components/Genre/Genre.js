import React from "react";
import {NavLink} from "react-router-dom";

import css from "../LeftMenu/LeftMenu.module.css";

const Genre = ({genre}) => {
   const {id, name} = genre

    return (
            <NavLink to={'/genres/' + id}><div className={css.leftMenuLink}>{name}</div></NavLink>
    );
};

export {Genre};