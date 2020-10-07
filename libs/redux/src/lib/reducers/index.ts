import searchMoviesReducer from './searchMoviesReducer';
import { combineReducers } from 'redux';
import latestMovieReducer from './latestMovieReducer';

const rootReducer = combineReducers({
    searchMovies: searchMoviesReducer,
    latestMovies: latestMovieReducer
})

export default rootReducer;