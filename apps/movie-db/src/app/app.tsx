import React from 'react';

import './app.css';

import { PageTitle } from '@myorg/ui-header';
import { MovieListDataAccessRecentMovies } from '@myorg/movie-list/data-access-recent-movies'
import { LatestMovieHeader, SearchMovieHeader } from '@myorg/ui-header'
import { MovieListSearchMovie } from '@myorg/movie-list/search-movie'

import { configureStore } from '@myorg/redux';
import { Provider } from 'react-redux';

const store = configureStore();

export const App = () => {

  return (
    <Provider store = {store}>
      <div className="app">        
            <PageTitle />
            <LatestMovieHeader />
            <MovieListDataAccessRecentMovies />
            <SearchMovieHeader />
            <MovieListSearchMovie />
      </div>
    </Provider>

  );
};

export default App;
