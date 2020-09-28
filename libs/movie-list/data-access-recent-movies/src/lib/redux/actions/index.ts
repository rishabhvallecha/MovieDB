import MOVIES from '../constants';
import { createAction } from '@reduxjs/toolkit'

interface ReturnAction {
    type: string,
    payload?: string
}

export type Payload = {
    payload?: string
}

const loadMovie = (): ReturnAction => ({
    type: MOVIES.LOAD_REQUEST
})

const stopLoading = (): ReturnAction => ({
    type: MOVIES.LOAD_STOP
})

const setMovie = (movie): ReturnAction => ({
    type: MOVIES.LOAD_SUCCESS,
    payload: movie
})

const setError = (error): ReturnAction => ({
    type: MOVIES.LOAD_FAILURE,
    payload: error
})


export const loadMovieAction = createAction(MOVIES.LOAD_REQUEST);
export const stopLoadingAction = createAction(MOVIES.LOAD_STOP);
export const setMovieAction = createAction<Payload>(MOVIES.LOAD_SUCCESS);
export const setErrorAction = createAction<Payload>(MOVIES.LOAD_FAILURE);


export {
    loadMovie,
    setMovie,
    setError,
    stopLoading
}