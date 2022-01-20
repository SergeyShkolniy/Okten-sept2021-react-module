import {Link} from "react-router-dom";

import css from "./Post.module.css"

const Post = ({post}) => {

    const{id, userId, title} = post

    return (

        <div className={css.main}>
            <Link to={id.toString()} state={post}>
                <div>{userId}:{id} {title}</div>
            </Link>
        </div>
    );
};

export default Post;