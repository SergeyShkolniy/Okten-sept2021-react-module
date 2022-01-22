import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import css from './PostsPage.module.css'
import {postServices} from "../../services";
import {Post} from "../../components";

const PostsPage = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{

        postServices.getAll().then(value => setPosts ([...value]))

    },[])


    return (
        <div>

            <div className={css.main}>

                <div className={css.postPageLeft}>
                    <h3>All posts</h3>
                    <div>{posts.map( value => <Post key = {value.id} post = {value}/>)}</div>
                </div>

                <div className={css.postPageRight}>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export {PostsPage};