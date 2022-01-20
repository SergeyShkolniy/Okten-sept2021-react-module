import {useEffect, useState} from "react";

import {commentsServices} from "../../services/comments.service";
import Comment from "../../components/comment/Comment";
import {useParams} from "react-router-dom";

const PostCommentsPage = () => {

   const [comments, setComments] = useState([])
    const {id} = useParams();

    useEffect(()=>{
        commentsServices.getById(id).then(value => setComments([...value]))

    },[id])

    return (
        <div>
            <h3>All comments on the post</h3>
            {
                <div>{comments.map( value => <Comment key = {value.id} comment = {value}/>)}</div>
            }
        </div>
    );
};

export default PostCommentsPage;
