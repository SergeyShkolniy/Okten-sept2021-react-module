import React from 'react';

import css from './EpisodeDetailsPage.module.css'

import {useLocation} from "react-router-dom";
import {EpisodeCharactersPicture} from "../../components/episodeCharactersPicture/EpisodeCharactersPicture";


const EpisodeDetailsPage = () => {

    const {state} = useLocation();
    const character = state.characters;

    return (
        <div >
            <div className={css.container}>
                <div className={css.title}><b>{state.name}</b></div>
                <div><b>Episode :</b> {state.episode}</div>
                <div><b>Air date :</b> {state.air_date}</div>
            </div>
            <div className={css.flex}>
                {character.map(character=><EpisodeCharactersPicture key={character} characterAll={character}/>)}
            </div>

        </div>
    );
};

export {EpisodeDetailsPage};