import { LATEST_MOVIES, Movie, MovieActionTypes } from '../constants'

export interface LatestMovieReducerState {
    loadState: boolean,
    movieState: Movie[],
    errorState: boolean
}

const InitialState: LatestMovieReducerState = {
    loadState: false,
    movieState: [],
    errorState: null
}

const latestMovieReducer = (state=InitialState, action: MovieActionTypes) => {
    switch(action.type) {
        case LATEST_MOVIES.LOAD_REQUEST:
            return ({
                ...state,
                loadState: true,
            })
        case LATEST_MOVIES.LOAD_SUCCESS: 
            return ({
                ...state,
                loadState: false,
                movieState: action.payload
            })
        case LATEST_MOVIES.LOAD_FAILURE:
            return ({
                ...state,
                loadState: false,
                errorState: action.payload
            })  
        default:
            return state 
    }
}

export default latestMovieReducer;