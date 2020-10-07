export const LATEST_MOVIES = {
    LOAD_REQUEST: 'LOAD_REQUEST',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    LOAD_FAILURE: 'LOAD_FAILURE',
}

export const SEARCH_MOVIES = {
    LOAD_SEARCH_MOVIES_REQUEST: 'LOAD_SEARCH_MOVIES_REQUEST',
    LOAD_SEARCH_MOVIES_SUCCESS: 'LOAD_SEARCH_MOVIES_SUCCESS',
    LOAD_SEARCH_MOVIES_FAILURE: 'LOAD_SEARCH_MOVIES_FAILURE',
}

export interface Movie {
    id?: number,
    title?: string,
    poster_path?: string,
    vote_average?: number,
}

export interface LoadMovieAction {
    type: typeof LATEST_MOVIES.LOAD_REQUEST,
    payload
}

export interface SetMoviesAction {
    type: typeof LATEST_MOVIES.LOAD_SUCCESS,
    payload: Movie[]
}

export interface SetErrorAction {
    type: typeof LATEST_MOVIES.LOAD_FAILURE,
    payload
}

export interface LoadSearchMoviesAction {
    type: typeof SEARCH_MOVIES.LOAD_SEARCH_MOVIES_REQUEST,
    payload: string
}

export interface SetSearchMoviesAction {
    type: typeof SEARCH_MOVIES.LOAD_SEARCH_MOVIES_SUCCESS,
    payload: Movie[]
}

export interface SetSearchMoviesErrorAction {
    type: typeof SEARCH_MOVIES.LOAD_SEARCH_MOVIES_FAILURE,
    payload
}

export type MovieActionTypes = LoadMovieAction | SetMoviesAction | SetErrorAction
export type SearchMovieActionTypes = LoadSearchMoviesAction | SetSearchMoviesAction | SetSearchMoviesErrorAction