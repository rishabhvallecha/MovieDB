import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadMovie, Movie } from '@myorg/redux'
import { MovieListUiMovieTile } from '@myorg/movie-list/ui-movie-tile';

import './movie-list-data-access-recent-movies.css';

export interface MovieListDataAccessRecentMoviesProps {
  isLoading: boolean,
  movies: Movie[],
  error: boolean,
  loadMovie,
}

//type PropsFromRedux = ConnectedProps<typeof connector>

const MovieListDataAccessRecentMoviesIsolate = (props: MovieListDataAccessRecentMoviesProps) => {


  const { isLoading, error, loadMovie, movies } = props;


  useEffect( () => {
    loadMovie();
  },[])

  return (
    <div>

      {error && <h3>Something went wrong</h3>}
      {isLoading ? <h3>Loading. Please Wait.</h3> : 
          <MovieListUiMovieTile movies = {movies} />
      }   
      
    </div>
  );
};

interface RootState {
  isLoading: boolean,
  movies: Movie[],
  error: boolean,
}

const mapStateToProps = ({ isLoading, movies, error }): RootState => ({
    isLoading,
    movies,
    error
})

const mapDispatchToProps = dispatch => {
  return {
      loadMovie: () => dispatch(loadMovie())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListDataAccessRecentMoviesIsolate);
