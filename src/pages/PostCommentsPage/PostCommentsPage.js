import React, {useEffect, useState} from 'react';
import {Comment} from "../../components";
import {useParams} from "react-router-dom";
import {postCommentsServices} from "../../services";

const PostCommentsPage = () => {

    const [comments, setComments] = useState([])
    const {id} = useParams();

    useEffect(()=>{
        postCommentsServices.getById(id).then(value => setComments([...value]))

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

export {PostCommentsPage};