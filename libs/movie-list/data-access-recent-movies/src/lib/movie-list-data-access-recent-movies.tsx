import React, { useState, useEffect } from 'react';
import { MovieListUiMovieTile } from '@myorg/movie-list/ui-movie-tile';

import './movie-list-data-access-recent-movies.css';



import axios from 'axios'

/* eslint-disable-next-line */
export interface MovieListDataAccessRecentMoviesProps {

}

export interface MovieListDataAccessRecentMovies {
  id: number,
  title: string,
  poster_path?: string,
  vote_average?: number
}

export const MovieListDataAccessRecentMovies = (props: MovieListDataAccessRecentMoviesProps) => {

  const [latestMovies, setLatestMovies] = useState<MovieListDataAccessRecentMovies[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const apiKey= "6bdadca3d1b9326a88bf6ed432cba4d0";

  // useEffect( () => {
  //     setLoading(true);
  //     setErrorMessage(false);
  //     try {
  //       fetch(`https://api.theemoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
  //       .then(res => res.json())
  //       .then(jsonResponse => 
  //         {
  //           const recentMovieList = jsonResponse.results
  //           recentMovieList.map( movie => ({ id: movie.id, title: movie.original_title, posterPath: movie.poster_path }))
  //           setLatestMovies([...jsonResponse.results]);
  //         });
  //     } catch (error) {
  //         setErrorMessage(true);
  //     }
  //     setLoading(false);
  // },[])

  useEffect( () => {
    const fetchLatestMovies = async () => {
      setLoading(true);
      try {
        const response = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
        setLatestMovies([...response.data.results.slice(0, 6)])
      }
      catch (error) {
        setErrorMessage(error)
      }
      setLoading(false);
    };

    fetchLatestMovies();

  },[])

  return (
    <div>

      {errorMessage && <div>Something went wrong</div>}
      {loading ? <div>Loading. Please Wait.</div> : 
        <MovieListUiMovieTile latestMoviesList = {latestMovies} />
      }   
      
    </div>
  );
};

export default MovieListDataAccessRecentMovies;
