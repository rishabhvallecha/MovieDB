import { LATEST_MOVIES } from '../constants';
import { setMovie, setError } from '../actions';
import { fetchLatestMovies } from '@myorg/data-access-api';

import { takeEvery, call, put } from 'redux-saga/effects';

function* handleLatestMoviesLoad() {
    try {
        const latestMovies = yield call(fetchLatestMovies)
        yield put(setMovie(latestMovies));
    }
    catch (error) {
        yield put(setError(error));
    }
}

export function* watchLatestMoviesLoad() {
    yield takeEvery(LATEST_MOVIES.LOAD_REQUEST, handleLatestMoviesLoad);
}
