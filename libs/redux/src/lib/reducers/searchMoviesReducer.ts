import { SEARCH_MOVIES, SearchMovieActionTypes, Movie } from '../constants'

export interface SearchMoviesReducerState {
    loadState: boolean,
    movieState: Movie[],
    errorState
}

const InitialState: SearchMoviesReducerState = {
    loadState: false,
    movieState: [],
    errorState: null
}

const searchMovieReducer = (state=InitialState, action: SearchMovieActionTypes) => {
    switch(action.type) {
        case SEARCH_MOVIES.LOAD_SEARCH_MOVIES_REQUEST:
            return ({
                ...state,
                loadState: true,
            })
        case SEARCH_MOVIES.LOAD_SEARCH_MOVIES_SUCCESS: 
            return ({
                ...state,
                loadState: false,
                movieState: action.payload
            })
        case SEARCH_MOVIES.LOAD_SEARCH_MOVIES_FAILURE:
            return ({
                ...state,
                loadState: false,
                errorState: action.payload
            })  
        default:
            return state 
    }
}

export default searchMovieReducer;
