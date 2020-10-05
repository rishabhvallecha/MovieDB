import { SEARCH_MOVIES, SetSearchMoviesErrorAction } from '../constants'

const searchErrorReducer = (state = null, action: SetSearchMoviesErrorAction) => {
    switch (action.type) {
        case SEARCH_MOVIES.LOAD_SEARCH_MOVIES_FAILURE: {
            return action.payload;
        }
        case SEARCH_MOVIES.LOAD_SEARCH_MOVIES_REQUEST: {
            return null;
        }
        case SEARCH_MOVIES.LOAD_SEARCH_MOVIES_SUCCESS: {
            return null
        }
        default:
            return state
    }
}

export default searchErrorReducer;