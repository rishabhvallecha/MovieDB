import { LATEST_MOVIES, LoadMovieAction } from '../constants'

const initialState = false;

const loadingReducer = (state = initialState, action: LoadMovieAction): boolean => {
    switch (action.type) {
        case LATEST_MOVIES.LOAD_REQUEST: 
            return true
        case LATEST_MOVIES.LOAD_SUCCESS: 
            return false
        case LATEST_MOVIES.LOAD_FAILURE:
            return false
        default:
            return state
    }
}

export default loadingReducer