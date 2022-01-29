import React from 'react';

import css from './Cat.module.css'

const Cat = ({cat, dispatch}) => {
    return (

        <div className={css.cat} key={cat.id}>

            {cat.name}
            <button onClick={() => dispatch({type: 'delete', target: 'cats', payload: cat.id})}>delete</button>

        </div>
    );
};

export {Cat};