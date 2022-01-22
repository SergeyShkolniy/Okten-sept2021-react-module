import React from 'react';

import css from './Photo.module.css'

const Photo = ({photo}) => {

    const {albumId, id, url} = photo

    return (
        <div >
           <div className={css.main}>
               <div><b>{albumId}:{id}</b></div>
               <img src={url} alt={albumId}/>
           </div>
        </div>
    );
};

export {Photo};