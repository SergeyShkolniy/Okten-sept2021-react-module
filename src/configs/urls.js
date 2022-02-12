const baseURL = "https://api.themoviedb.org/3";
export default baseURL;

export const apiKey = "movie?api_key=2ddeb403459b2402c51c7be94632ef88";
export const key = "?api_key=2ddeb403459b2402c51c7be94632ef88";

export const urls = {

    movies: `/discover/${apiKey}`,
    movie: '/movie',
    search: '/search/movie',
    genres: '/genre/movie/list'
}