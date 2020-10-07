import React from 'react';

import './movie-list-ui-movie-search.css';

export interface MovieListUiMovieSearchProps {
  inputText: string,
  handleChange,
  handleClick
}

export const MovieListUiMovieSearch = (props: MovieListUiMovieSearchProps) => {

  const {inputText, handleChange, handleClick} = props;

  return (
    <div className="search-column">
      <div className="form-container">
        <form className="search-form">
          <div className="search-form__input-container">
            <input className="search-form__input" type='text' value={inputText} onChange={handleChange} placeholder="Type a movie name"></input>
          </div>
          <div className="search-form__button-container">
            <button className="search-form__button" onClick={handleClick}>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieListUiMovieSearch;
