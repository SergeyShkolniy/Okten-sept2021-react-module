import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from './PhotoPage.module.css'
import {Photo} from "../../components";
import {photoServices} from "../../services";


const PhotosPage = () => {

    const [photos, setPhotos] = useState([])
    const {albumId} = useParams();

    useEffect(() =>{

        photoServices.getById(albumId).then(value => setPhotos([...value]))

    },[albumId])


    return (
        <div>

            <h3>All photo on the album</h3>
            {
                <div className={css.flex}>{photos.map( value => <Photo key = {value.id} photo = {value}/>)}</div>
            }

        </div>
    );
};

export {PhotosPage};