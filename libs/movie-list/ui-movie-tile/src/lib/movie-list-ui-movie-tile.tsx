import React from 'react';

import './movie-list-ui-movie-tile.css';
import { Movie } from '@myorg/movie-list/data-access-recent-movies'


/* eslint-disable-next-line */

export interface MovieListUiMovieTileProps {
  movies?: Movie[]
}

export const MovieListUiMovieTile = (props: MovieListUiMovieTileProps) => {
  return (
    <div className="movie-list-container">
        {props.movies.map(movie => (
          <div className="movie-list-item" key={movie.id}>         
              <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Poster"/>
              <div className="movie-title">{movie.title}</div>
              <div className="movie-title">{movie.vote_average}</div>
          </div>
    ))}
    </div>
  );
};

export default MovieListUiMovieTile;
