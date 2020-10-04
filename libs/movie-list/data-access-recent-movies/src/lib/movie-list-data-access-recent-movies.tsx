import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadMovie } from './redux/actions'
import { Movie } from './redux/constants'
import { MovieListUiMovieTile } from '@myorg/movie-list/ui-movie-tile';

import './movie-list-data-access-recent-movies.css';

export interface MovieListDataAccessRecentMoviesProps {
  isLoading?: boolean,
  movies?: Movie[],
  error?: boolean,
  loadMovie?,
}

//type PropsFromRedux = ConnectedProps<typeof connector>

const MovieListDataAccessRecentMoviesIsolate = (props: MovieListDataAccessRecentMoviesProps) => {


  const { isLoading, error, loadMovie, movies } = props;


  useEffect( () => {
    loadMovie();
  },[])

  return (
    <div>

      {error && <div>Something went wrong</div>}
      {isLoading ? <div>Loading. Please Wait.</div> : 
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

export * from './redux/constants'