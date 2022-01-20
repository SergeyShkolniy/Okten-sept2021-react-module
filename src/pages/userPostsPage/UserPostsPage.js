import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import UserPosts from "../../components/userPosts/UserPosts";
import {userServices} from "../../services/user.service";

const UserPostsPage = () => {

    const [posts, setPosts] = useState([])
    const {id} = useParams();
    
    useEffect(() =>{
        userServices.getById(id).then(value => setPosts([...value]))
    },[id])
    
    return (
        <div>
            <h3>All posts on the user</h3>
            {
                <div>{posts.map( value => <UserPosts key = {value.id} post = {value}/>)}</div>
            }
        </div>
    );
};

export default UserPostsPage;