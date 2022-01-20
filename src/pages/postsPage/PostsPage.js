import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom"

import {postServices} from "../../services/post.services";
import Post from "../../components/post/Post";
import css from "./PostPage.module.css"

const PostsPage = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{

        postServices.getAll().then(value => setPosts ([...value]))

    },[])

    return (
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
    );
};

export default PostsPage;