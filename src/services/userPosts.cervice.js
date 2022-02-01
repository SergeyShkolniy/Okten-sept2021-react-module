import {axiosService} from "./axios.service";

import {urls} from "../configs";

export const userPostsServices = {
    getById: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}