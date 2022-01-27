import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.header}>

            <div className={css.container}>
                <Link to='/'>Rick and Morty!</Link>
            </div>

        </div>
    );
};

export {Header};