import movieReducer from './movieReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    movies: movieReducer,
    error: errorReducer
})

export default rootReducer;