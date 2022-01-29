import React from 'react';

import css from './Dog.module.css'

const Dog = ({dog, dispatch}) => {
    return (
        <div className={css.dog} key={dog.id}>

            {dog.name}
            <button onClick={() => dispatch({type: 'delete', target: 'dogs', payload: dog.id})}>delete</button>

        </div>
    );
};

export {Dog};