import React from 'react';

import './movie-list-ui-movie-tile.css';

/* eslint-disable-next-line */

interface MovieList {
  id: number,
  title: string,
  poster_path?: string,
  vote_average?: number
}

export interface MovieListUiMovieTileProps {
  moviesList: MovieList[]
}

export const MovieListUiMovieTile = (props: MovieListUiMovieTileProps) => {
  return (
    <div className="movie-list-container">
        {props.moviesList.map(movie => (
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
