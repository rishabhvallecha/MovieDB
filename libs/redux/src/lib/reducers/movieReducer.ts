import { LATEST_MOVIES, SetMoviesAction, Movie } from '../constants'

const initialState: Movie[] = []

const movieReducer = (state = initialState, action: SetMoviesAction): Movie[] => {
    if (action.type === LATEST_MOVIES.LOAD_SUCCESS) {
        return action.payload      
    }
    return state;
}

export default movieReducer