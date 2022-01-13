import {useEffect, useState} from "react";

import Comment from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value)
            })

    }, [])

    return (
        <div>
            {
                comments.map(value => <div key={value.id}><Comment comment={value}/></div>)
            }
        </div>
    );
};

export default Comments