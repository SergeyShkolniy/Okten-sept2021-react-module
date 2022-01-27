import React, {useEffect, useState} from 'react';

import css from './EpisodesPage.module.css'
import {episodeService} from "../../services";
import {Episode} from "../../components";

const EpisodesPage = () => {

    const [numberPage, setNumberPage] = useState();
    const [page, setPage] = useState(1);

    const [episodes, setEpisodes] = useState([])



    useEffect(() => {

        episodeService.getEpisodeByPage(page).then(value => {
            setEpisodes([...value.results]);
            setNumberPage(value.info.pages)} );


    }, [page])

    const forward = () => {
        if (page < numberPage){
            setPage(page + 1);
        }
    };

    const back = () => {
        if (page > 1){
            setPage(page - 1);
        }

    };

    return (
        <div>
            <div className={css.title}> Rick and Morty episodes</div>
            <div className={css.container}>
                <div className={css.episodesFlex}>{episodes.map(value => <Episode key={value.id} episodeInfo={value}/>)}</div>
                <div className={css.buttonFlex}>
                    <button className={css.button} onClick={back}>back</button>
                    <button className={css.button} onClick={forward}>forward</button>
                </div>
            </div>
        </div>
    );
};

export {EpisodesPage};