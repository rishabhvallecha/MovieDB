import { MOVIES, Movie } from '../constants'
import { setMovie, setError } from '../actions';

import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios'

const apiKey= "6bdadca3d1b9326a88bf6ed432cba4d0";

const fetchLatestMovies = async (): Promise<Movie[]> => {
    const response = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);

    if (response.status >= 400) {
        throw new Error(response.statusText);
    }

    return response.data.results.slice(0,6);
}

function* handleLatestMoviesLoad() {
    try {
        const latestMovies = yield call(fetchLatestMovies)
        yield put(setMovie(latestMovies));
    }
    catch (error) {
        yield put(setError(error));
    }
}

export default function* watchLatestMoviesLoad() {
    yield takeEvery(MOVIES.LOAD_REQUEST, handleLatestMoviesLoad);
}