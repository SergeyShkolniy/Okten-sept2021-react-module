import {axiosService} from "./axios.service";
import {key,apiKey, urls} from "../configs";


export const movieServices = {
    getAll: (page) => axiosService.get(urls.movies,  {params: {page}}).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.movie}/${id}${apiKey}`).then(value => value.data),

    searchByTitle: (title)=> axiosService.get(`${urls.search}/${apiKey}&query=${title}`).then(value => value.data),
    searchByPage: (title,page)=> axiosService.get(`${urls.search}/${apiKey}&query=${title}&page=${page}`).then(value => value.data),


    getGenres:() => axiosService.get(`${urls.genres}${key}`).then(value => value.data),
    getByGenreId: (id,page) => axiosService.get(`${urls.movies}`,{params: {with_genres: id, page}}).then(value => value.data)
}
// &query=${title}&page=${page}