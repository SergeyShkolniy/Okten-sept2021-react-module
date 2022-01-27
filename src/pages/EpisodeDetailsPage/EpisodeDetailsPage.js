import React from 'react';

import css from './EpisodeDetailsPage.module.css'

import {useLocation} from "react-router-dom";
import {EpisodeCharactersPicture} from "../../components/episodeCharactersPicture/EpisodeCharactersPicture";


const EpisodeDetailsPage = () => {

    const {state} = useLocation();
    const character = state.characters;

    return (
        <div className={css.flex}>
            {character.map(character=><EpisodeCharactersPicture key={character} characterAll={character}/>)}
        </div>
    );
};

export {EpisodeDetailsPage};