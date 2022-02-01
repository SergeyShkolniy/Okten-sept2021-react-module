import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getByIdPosts} from "../../store";

import {useParams} from "react-router-dom";
import {UserPost} from "../../components";

const UserPostsPage = () => {

    const {id} = useParams();

    const {posts} = useSelector(state => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getByIdPosts(id))

    }, [dispatch, id])

    return (
        <>

            <h3>All posts on the user</h3>
            {
                <div>{posts.map( value => <UserPost key = {value.id} post = {value}/>)}</div>
            }

        </>
    );
};

export {UserPostsPage};