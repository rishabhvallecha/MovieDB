import React from 'react'

import MovieListDataAccessRecentMovies, { MovieListDataAccessRecentMoviesProps } from './movie-list-data-access-recent-movies';
import { loadMovie, Movie } from '@myorg/redux'

import { LatestMovieReducerState } from 'libs/redux/src/lib/reducers/latestMovieReducer';
import movieListDataAccessRecentMovies from './movie-list-data-access-recent-movies';

export default {
    component: MovieListDataAccessRecentMovies,
    title: 'MovieListDataAccessRecentMovies'
}

export const primary = () => {
    const props: MovieListDataAccessRecentMoviesProps = {
        loadMovie,
        latestMovies: {loadState: false, movieState: [], errorState: null}
    };

    <MovieListDataAccessRecentMovies />

}