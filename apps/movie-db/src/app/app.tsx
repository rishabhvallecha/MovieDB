import React from 'react';

import './app.css';

//import { ReactComponent as Logo } from './logo.svg';
//import star from './star.svg';

import { PageTitle } from '@myorg/ui-header';
import { MovieListDataAccessRecentMovies } from '@myorg/movie-list/data-access-recent-movies'
import { LatestMovieHeader } from '@myorg/ui-header'

import { configureStore } from '@myorg/movie-list/data-access-recent-movies'
import { Provider } from 'react-redux';

const store = configureStore();

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.css file.
   */
  return (
    <Provider store = {store}>
      <div className="app">        
            <PageTitle />
            <LatestMovieHeader />
            <MovieListDataAccessRecentMovies name="RISHABH"/>
      </div>
    </Provider>

  );
};

export default App;
