import { all } from 'redux-saga/effects'

import { watchLatestMoviesLoad } from './latestMovieSaga';
import { searchMoviesLoad } from './searchMoviesSaga'

export default function* rootSaga() {
    yield all([watchLatestMoviesLoad(), searchMoviesLoad()]);
}