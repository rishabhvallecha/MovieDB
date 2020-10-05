import { SEARCH_MOVIES, SetSearchMoviesAction, Movie } from '../constants'

const initialState: Movie[] = []

const searchMoviesReducer = (state = initialState, action: SetSearchMoviesAction): Movie[] => {
    if (action.type === SEARCH_MOVIES.LOAD_SEARCH_MOVIES_SUCCESS) {
        return action.payload      
    }
    return state;
}

export default searchMoviesReducer;