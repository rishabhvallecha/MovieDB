import { MOVIES, MovieState, SetMovieAction } from '../constants'

const initialState: MovieState = {
    movies: []
}

const movieReducer = (state = initialState, action: SetMovieAction): MovieState => {
    if (action.type === MOVIES.LOAD_SUCCESS) {
        return {
            movies: [...state.movies, action.payload]
        }
    }
    return state;
}

// const loadingReducer = createReducer(initialState)
export default movieReducer