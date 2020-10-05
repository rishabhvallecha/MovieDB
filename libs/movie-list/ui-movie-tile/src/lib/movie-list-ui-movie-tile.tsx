import React from 'react';

import './movie-list-ui-movie-tile.css';
import { Movie } from '@myorg/redux';


/* eslint-disable-next-line */

export interface MovieListUiMovieTileProps {
  movies: Movie[]
}

export const MovieListUiMovieTile = (props: MovieListUiMovieTileProps) => {
  return (
    <div className="cards-list">
        {props.movies.map(movie => (
          <div className="card" key={movie.id}>
            <div className="card__image">         
              <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Poster"/>
            </div>
            <div className="card__title">{movie.title}</div>
            <div className="card__rating">Rating: {movie.vote_average}/10</div> 
          </div>
    ))}
    </div>
  );
};

export default MovieListUiMovieTile;
