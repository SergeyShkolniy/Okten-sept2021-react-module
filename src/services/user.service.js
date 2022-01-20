import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const userServices = {
    getAll:()=>axiosService.get(urls.users).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}