import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumsServices = {
    getById: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data)
}