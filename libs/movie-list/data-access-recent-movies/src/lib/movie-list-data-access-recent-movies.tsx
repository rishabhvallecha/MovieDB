import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadMovie, Movie } from '@myorg/redux'
import { MovieListUiMovieTile } from '@myorg/movie-list/ui-movie-tile';

import { LatestMovieReducerState } from 'libs/redux/src/lib/reducers/latestMovieReducer';

import './movie-list-data-access-recent-movies.css';

export interface MovieListDataAccessRecentMoviesProps {
  loadMovie,
  latestMovies: LatestMovieReducerState
}

const MovieListDataAccessRecentMoviesIsolate = (props: MovieListDataAccessRecentMoviesProps) => {


  const { latestMovies, loadMovie } = props;
  console.log(latestMovies)

  useEffect( () => {
    loadMovie();
  },[])

  return (
    <div className='latest-movies'>

      {latestMovies.errorState && <h3>Something went wrong</h3>}
      {latestMovies.loadState ? <h3>Loading. Please Wait.</h3> : 
          <MovieListUiMovieTile movies = {latestMovies.movieState} />
      }   
      
    </div>
  );
};

interface RootState {
    latestMovies: LatestMovieReducerState
}

const mapStateToProps = ({ latestMovies }): RootState => ({
    latestMovies
})

const mapDispatchToProps = dispatch => {
  return {
      loadMovie: () => dispatch(loadMovie())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListDataAccessRecentMoviesIsolate);
