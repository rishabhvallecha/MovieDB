import { MOVIES, LoadMovieAction } from '../constants'

const initialState = false;

const loadingReducer = (state = initialState, action: LoadMovieAction): boolean => {
    switch (action.type) {
        case MOVIES.LOAD_REQUEST: 
            return true
        case MOVIES.LOAD_SUCCESS: 
            return false
        case MOVIES.LOAD_FAILURE:
            return false
        case MOVIES.LOAD_STOP:
            return false
        default:
            return state
    }
}

// const loadingReducer = createReducer(initialState)

export default loadingReducer