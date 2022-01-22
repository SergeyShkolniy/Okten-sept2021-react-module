import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumsServices} from "../../services";
import {Album} from "../../components";


const AlbumsPage = () => {

    const [albums, setAlbums] = useState([])
    const {id} = useParams();

    useEffect(() =>{

        albumsServices.getById(id).then(value => setAlbums([...value]))

    },[id])


    return (
        <div>

            <h3>All albums on the user</h3>
            <div>{albums.map( value => <Album key = {value.id} album = {value}/>)}</div>

            <Outlet/>

        </div>
    );
};

export {AlbumsPage};