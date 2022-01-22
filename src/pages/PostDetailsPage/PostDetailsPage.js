import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet} from "react-router-dom";

import {postServices} from "../../services";
import {PostDetails} from "../../components";

const PostDetailsPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }

        postServices.getById(id).then(value => setPost({...value}))

    }, [id, state])


    return (
        <div>
            { post && <PostDetails post = {post}/>}

            <Outlet/>

        </div>
    );
};

export {PostDetailsPage};