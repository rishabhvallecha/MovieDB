import { MOVIES, MovieActionTypes } from '../constants';
// import { createAction } from '@reduxjs/toolkit'

// export type Payload = {
//     payload?: string
// }

const loadMovie = (): MovieActionTypes => ({
    type: MOVIES.LOAD_REQUEST
})

const stopLoading = (): MovieActionTypes => ({
    type: MOVIES.LOAD_STOP
})

const setMovie = (movie): MovieActionTypes => ({
    type: MOVIES.LOAD_SUCCESS,
    payload: movie
})

const setError = (error): MovieActionTypes => ({
    type: MOVIES.LOAD_FAILURE,
    payload: error
})


// export const loadMovieAction = createAction(MOVIES.LOAD_REQUEST);
// export const stopLoadingAction = createAction(MOVIES.LOAD_STOP);
// export const setMovieAction = createAction<Payload>(MOVIES.LOAD_SUCCESS);
// export const setErrorAction = createAction<Payload>(MOVIES.LOAD_FAILURE);


export {
    loadMovie,
    setMovie,
    setError,
    stopLoading
}