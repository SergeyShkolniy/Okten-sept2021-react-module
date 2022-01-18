import './Post.css'

const Post = ({post}) => {

    const {id, userId, title, body} = post;

    return (
        <div className={'post'}>
            <div>{userId}:{id} <b>{title}</b></div>
            <div>{body}</div>


        </div>
    );
};

export default Post;