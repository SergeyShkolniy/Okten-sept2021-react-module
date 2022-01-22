import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {UserPosts} from "../../components";
import {userPostsServices} from "../../services";

const UserPostPage = () => {

    const [posts, setPosts] = useState([])
    const {id} = useParams();

    useEffect(() =>{

        userPostsServices.getById(id).then(value => setPosts([...value]))

    },[id])

    return (
        <>

            <h3>All posts on the user</h3>
            {
                <div>{posts.map( value => <UserPosts key = {value.id} post = {value}/>)}</div>
            }

        </>
    );
};

export {UserPostPage};