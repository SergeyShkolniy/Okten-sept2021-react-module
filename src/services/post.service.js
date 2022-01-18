import {urls} from "../configs/urls";

const getUserId = (id) => {

    return fetch(`${urls.posts}?userId=${id}`)
        .then(value => value.json())

}

 export const postService = {

    getUserId

}
