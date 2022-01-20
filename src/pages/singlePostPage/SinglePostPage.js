import {useEffect, useState} from "react";
import {useLocation, useParams, Outlet, Link} from "react-router-dom";

import {postServices} from "../../services/post.services";
import css from "./SinglePostPage.module.css"

const SinglePostPage = () => {

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

            {post && (
                <div className={css.main}>
                    <h3>Post Details</h3>
                    <div className={css.block}>
                        <div><b>{post.userId}:{post.id} {post.title}</b></div>
                        <div className={css.text}>{post.body}</div>
                    </div>
                   <Link to={'comments'}><button>All comments on the post</button></Link>
                </div>
            )}

            <Outlet/>

        </div>
    );
};

export default SinglePostPage;