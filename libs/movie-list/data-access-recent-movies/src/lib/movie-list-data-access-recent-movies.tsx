import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { loadMovie, setMovie, setError, stopLoading } from './redux/actions'
import { MovieActionTypes } from './redux/constants'
//import { MovieListUiMovieTile } from '@myorg/movie-list/ui-movie-tile';

import './movie-list-data-access-recent-movies.css';

import axios from 'axios'

/* eslint-disable-next-line */


interface MovieListDataAccessRecentMoviesInterface {
  id: number,
  title: string,
  poster_path?: string,
  vote_average?: number
}

// export interface MovieListDataAccessRecentMoviesProps {
//   isLoading?: boolean,
//   movie?: MovieListDataAccessRecentMovies[],
//   error?: boolean,
//   loadMovie?,
//   setError?,
//   stopLoading?,
//   setMovie?
// }
interface RootState {
  isLoading?: boolean,
  movie?: MovieListDataAccessRecentMoviesInterface[],
  error?: boolean,
  loadMovie?,
  setError?,
  stopLoading?,
  setMovie?
}

const mapState = (state: RootState) => {
  return {
    isLoading: state.isLoading,
    movie: state.movie,
    error: state.error
  }
}

const mapDispatch = dispatch => {
  return {
      loadMovie: () => dispatch(loadMovie()),
      setMovie: (movie: MovieActionTypes) => dispatch(setMovie(movie)),
      setError: error => dispatch(setError(error)),
      stopLoading: () => dispatch(stopLoading()),
  }
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>



export const MovieListDataAccessRecentMovies = (props: PropsFromRedux) => {

  //const [latestMovies, setLatestMovies] = useState<MovieListDataAccessRecentMovies[]>([]);
  //const [loading, setLoading] = useState<boolean>(false);
  //const [errorMessage, setErrorMessage] = useState<string>('');

  const apiKey= "6bdadca3d1b9326a88bf6ed432cba4d0";
  console.log("HELLO");
  
  const {isLoading, error, loadMovie, setError, stopLoading, setMovie, movie} = props;
 

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
      loadMovie()
      console.log("HELLO");
      try {
        const response = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
        setMovie([...response.data.results.slice(0, 6)])

      }
      catch (error) {
        setError(error)
      }
      stopLoading();
    };

    fetchLatestMovies();

  },[loadMovie, setError, stopLoading, setMovie])

  return (
    <div>

      {error && <div>Something went wrong</div>}
      {isLoading ? <div>Loading. Please Wait.</div> : 
        //<MovieListUiMovieTile moviesList = {movie} />
        <div className="movie-list-container">
        {movie.map(movie => (
          <div className="movie-list-item" key={movie.id}>         
              <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Poster"/>
              <div className="movie-title">{movie.title}</div>
              <div className="movie-title">{movie.vote_average}</div>
          </div>
    ))}
    </div>
      }   
      
    </div>
  );
};


export default connector(MovieListDataAccessRecentMovies);