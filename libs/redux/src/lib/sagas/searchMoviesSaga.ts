import { fetchSearchMovies } from '@myorg/data-access-api';
import { takeEvery, put, call } from 'redux-saga/effects';
import { setSearchMoviesError, setSearchMovies } from '../actions';
import { LoadSearchMoviesAction, SEARCH_MOVIES } from '../constants';

function* handleSearchMoviesLoad(action: LoadSearchMoviesAction) {
    try {
        const searchMovies = yield call(fetchSearchMovies, action.payload);
        yield put(setSearchMovies(searchMovies));
    }
    catch (error) {
        yield put(setSearchMoviesError(error));
    }
}

export function* searchMoviesLoad() {
    yield takeEvery(SEARCH_MOVIES.LOAD_SEARCH_MOVIES_REQUEST, handleSearchMoviesLoad);
}