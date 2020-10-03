export const MOVIES = {
    LOAD_REQUEST: 'LOAD_REQUEST',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    LOAD_FAILURE: 'LOAD_FAILURE',
    LOAD_STOP: 'LOAD_STOP'
}

export interface Movie {
    id?: number,
    title?: string,
    poster_path?: string,
    vote_average?: number,
    popularity?: number,
    vote_count?: number,
    video?: boolean,
    adult?: boolean,
    backdrop_path?: string,
    original_language?: string,
    genre_ids?: number[],
    original_title?: string,
    overview?: string,
    release_date?: string
}

export interface LoadMovieAction {
    type: typeof MOVIES.LOAD_REQUEST
}

export interface StopLoadingAction {
    type: typeof MOVIES.LOAD_STOP
}

export interface SetMoviesAction {
    type: typeof MOVIES.LOAD_SUCCESS,
    payload: Movie[]
}

export interface SetErrorAction {
    type: typeof MOVIES.LOAD_FAILURE,
    payload
}

export type MovieActionTypes = LoadMovieAction | StopLoadingAction | SetMoviesAction | SetErrorAction