import React from 'react';

import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (

        <>
            <div className={css.main}>

                <div className={css.number}>404</div>
                <div className={css.not}>Not Found</div>

            </div>

        </>
    );
};

export {NotFoundPage};