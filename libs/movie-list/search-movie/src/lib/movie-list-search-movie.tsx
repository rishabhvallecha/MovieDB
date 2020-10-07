import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { loadSearchMovies, Movie } from '@myorg/redux'

import './movie-list-search-movie.css';
import { MovieListUiMovieTile } from '@myorg/movie-list/ui-movie-tile';
import { MovieListUiMovieSearch } from '@myorg/movie-list/ui-movie-search';
import { SearchMoviesReducerState } from 'libs/redux/src/lib/reducers/searchMoviesReducer';

export interface MovieListSearchMovieProps {
  searchMovies: SearchMoviesReducerState,
  loadSearchMovies,
}

export const MovieListSearchMovieIsolate = (props: MovieListSearchMovieProps) => {

  const [inputText, setInputText] = useState('');
  const [query, setQuery] = useState('');

  const { searchMovies, loadSearchMovies } = props;

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const {value} = event.currentTarget;
    setInputText(value);
  }

  function handleClick(event: React.FormEvent<HTMLInputElement>) {
    setQuery(inputText);
    event.preventDefault();
  }

  useEffect( () => {

    query && loadSearchMovies(query)
  }, [loadSearchMovies, query])

  return (
    <div>
      <MovieListUiMovieSearch 
        inputText={inputText}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      {searchMovies.errorState && <h3>Something went wrong</h3> }
      {searchMovies.loadState ? <h3>Loading. Please Wait.</h3> : 

        query && 
        <div>
          <h3>Results for: {query}</h3>
          <MovieListUiMovieTile movies = {searchMovies.movieState} />
        </div>
        
      }
    </div>
  );
};

interface RootState {
  searchMovies: SearchMoviesReducerState
}

const mapStateToProps = ({ searchMovies }): RootState => ({
  searchMovies
})

const mapDispatchToProps = dispatch => ({
  loadSearchMovies: (query: string) => dispatch(loadSearchMovies(query))
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieListSearchMovieIsolate);
