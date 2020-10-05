import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { loadSearchMovies, Movie } from '@myorg/redux'

import './movie-list-search-movie.css';
import { MovieListUiMovieTile } from '@myorg/movie-list/ui-movie-tile';
import { MovieListUiMovieSearch } from '@myorg/movie-list/ui-movie-search';

export interface MovieListSearchMovieProps {
  isLoadingSearch: boolean,
  searchMoviesList: Movie[],
  searchMoviesError: boolean,
  loadSearchMovies,
}

export const MovieListSearchMovieIsolate = (props: MovieListSearchMovieProps) => {

  const [inputText, setInputText] = useState('');
  const [query, setQuery] = useState('');

  const { isLoadingSearch, searchMoviesList, searchMoviesError, loadSearchMovies } = props;

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const {value} = event.currentTarget;
    setInputText(value);
  }

  function handleClick(event: React.FormEvent<HTMLInputElement>) {
    setQuery(inputText);
    event.preventDefault();
  }

  useEffect( () => {
    loadSearchMovies(query)
  }, [loadSearchMovies, query])

  return (
    <div>
      <MovieListUiMovieSearch 
        inputText={inputText}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      {searchMoviesError && <h3>Something went wrong</h3> }
      {isLoadingSearch ? <h3>Loading. Please Wait.</h3> : 
        query === '' ? 
        <div>
          <h3>Popular Movies</h3>
          <MovieListUiMovieTile movies = {searchMoviesList} />
        </div> :
        <div>
          <h3>Results for: {query}</h3>
          <MovieListUiMovieTile movies = {searchMoviesList} />
        </div>
      }
    </div>
  );
};

interface RootState {
  isLoadingSearch: boolean,
  searchMoviesList: Movie[],
  searchMoviesError: boolean
}

const mapStateToProps = ({ isLoadingSearch, searchMoviesList, searchMoviesError }): RootState => ({
  isLoadingSearch,
  searchMoviesList,
  searchMoviesError
})

const mapDispatchToProps = dispatch => ({
  loadSearchMovies: (query: string) => dispatch(loadSearchMovies(query))
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieListSearchMovieIsolate);
