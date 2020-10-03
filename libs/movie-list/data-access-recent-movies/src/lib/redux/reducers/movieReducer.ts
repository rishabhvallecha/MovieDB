import { MOVIES, SetMoviesAction, Movie } from '../constants'

const initialState: Movie[] = []

const movieReducer = (state = initialState, action: SetMoviesAction): Movie[] => {
    if (action.type === MOVIES.LOAD_SUCCESS) {
        return action.payload      
    }
    return state;
}

// const loadingReducer = createReducer(initialState)
export default movieReducer