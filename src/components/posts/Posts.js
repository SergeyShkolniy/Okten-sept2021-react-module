import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import Post from "../post/Post";

const Posts = ({userId}) => {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        postService.getUserId(userId)
            .then(value => setPosts(value))

    }, [userId]);

    return (
        <div>
            {
                posts.map( value => <Post key = {value.id} post = {value}/>)
            }
        </div>
    );
};

export default Posts;