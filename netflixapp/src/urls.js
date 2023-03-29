import { API_KEY } from "./constants/constants"

export const originals = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
export const actions = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`