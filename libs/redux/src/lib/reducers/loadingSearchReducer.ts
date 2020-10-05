import { LoadSearchMoviesAction, SEARCH_MOVIES } from '../constants';

const initialState = false;

const loadingSearchReducer = (state = initialState, action: LoadSearchMoviesAction) => {
    switch (action.type) {
        case SEARCH_MOVIES.LOAD_SEARCH_MOVIES_REQUEST: 
            return true
        case SEARCH_MOVIES.LOAD_SEARCH_MOVIES_SUCCESS: 
            return false
        case SEARCH_MOVIES.LOAD_SEARCH_MOVIES_FAILURE:
            return false
        default:
            return state
    }
}

export default loadingSearchReducer;