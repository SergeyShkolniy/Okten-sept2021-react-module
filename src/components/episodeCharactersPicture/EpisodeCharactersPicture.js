import React, {useEffect, useState} from 'react';

import css from './EpisodeCharactersPicture.module.css'

const EpisodeCharactersPicture = ({characterAll}) => {

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`${characterAll}`).then(value => value.json()).then(value => setCharacter(value));
    }, [characterAll]);

    return (

        <div className={css.container}>
            {character && (
                <div className={css.flex}>
                    <img src={character.image} alt={character.name} className={css.containerImg}/>
                    <div className={css.title}><b>{character.name}</b></div>
                    <div><b>Status :</b> {character.status}</div>
                    <div><b>Species :</b> {character.species}</div>
                    <div><b>Gender :</b> {character.gender}</div>
                    <div><b>Origin :</b> {character.origin.name}</div>
                    <div><b>Location :</b> {character.location.name}</div>
                </div>
            )}
        </div>
    );
};

export {EpisodeCharactersPicture};