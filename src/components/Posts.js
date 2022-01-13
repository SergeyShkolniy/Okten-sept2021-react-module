import {useEffect, useState} from "react";

import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            })

    }, [])

    return (
        <div>
            {
                posts.map(value => <div key={value.id}><Post post={value}/></div>)
            }
        </div>
    );
};

export default Posts;