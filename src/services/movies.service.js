import {axiosService} from "./axios.service";
import {urls} from "../configs";


export const movieServices = {
    getAll: (page) => axiosService.get(urls.movies,{params: {page}}).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.movies}/${id}`).then(value => value.data)
}