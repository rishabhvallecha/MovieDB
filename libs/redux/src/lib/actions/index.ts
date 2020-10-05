import { LATEST_MOVIES, MovieActionTypes, SearchMovieActionTypes, Movie, SEARCH_MOVIES } from '../constants';

const loadMovie = (): MovieActionTypes => ({
    type: LATEST_MOVIES.LOAD_REQUEST
})

const setMovie = (movie: Movie): MovieActionTypes => ({
    type: LATEST_MOVIES.LOAD_SUCCESS,
    payload: movie
})

const setError = (error): MovieActionTypes => ({
    type: LATEST_MOVIES.LOAD_FAILURE,
    payload: error
})

const loadSearchMovies = (query: string): SearchMovieActionTypes => ({
    type: SEARCH_MOVIES.LOAD_SEARCH_MOVIES_REQUEST,
    payload: query
})

const setSearchMovies = (movies: Movie): SearchMovieActionTypes => ({
    type: SEARCH_MOVIES.LOAD_SEARCH_MOVIES_SUCCESS,
    payload: movies
})

const setSearchMoviesError = (error): SearchMovieActionTypes => ({
    type: SEARCH_MOVIES.LOAD_SEARCH_MOVIES_FAILURE,
    payload: error
})

export {
    loadMovie,
    setMovie,
    setError,
    loadSearchMovies,
    setSearchMovies,
    setSearchMoviesError
}