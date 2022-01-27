import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const episodeService = {
    getEpisodeByPage: (pages) => axiosService.get(`${urls.episode}${pages}`).then(value => value.data)
};
