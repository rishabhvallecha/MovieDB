import movieReducer from './movieReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import loadingSearchReducer from './loadingSearchReducer';
import searchMoviesReducer from './searchMoviesReducer';
import searchErrorMovieReducer from './searchErrorReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    movies: movieReducer,
    error: errorReducer,
    isLoadingSearch: loadingSearchReducer,
    searchMoviesList: searchMoviesReducer,
    searchMoviesError: searchErrorMovieReducer
})

export default rootReducer;