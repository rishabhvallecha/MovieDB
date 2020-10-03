import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadMovie, setMovies, setError, stopLoading } from './redux/actions'
import { Movie } from './redux/constants'
import { MovieListUiMovieTile } from '@myorg/movie-list/ui-movie-tile';

import './movie-list-data-access-recent-movies.css';

import axios from 'axios'

/* eslint-disable-next-line */

export interface MovieListDataAccessRecentMoviesProps {
  isLoading?: boolean,
  movies?: Movie[],
  error?: boolean,
  loadMovie?,
  setError?,
  stopLoading?,
  setMovies?,
  name: string
}

//type PropsFromRedux = ConnectedProps<typeof connector>

const MovieListDataAccessRecentMoviesIsolate = (props: MovieListDataAccessRecentMoviesProps) => {

  //const [latestMovies, setLatestMovies] = useState<MovieListDataAccessRecentMovies[]>([]);
  //const [loading, setLoading] = useState<boolean>(false);
  //const [errorMessage, setErrorMessage] = useState<string>('');

  const apiKey= "6bdadca3d1b9326a88bf6ed432cba4d0";
  
  const {isLoading, error, loadMovie, setError, stopLoading, setMovies, movies, name} = props;

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
      try {
        const response = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
        console.log(response.data.results.slice(0, 6))
        // const movieList: MovieState = {
        //   movieList: [response.data.results.slice(0, 6)]
        // }
        // console.log(movieList)
        setMovies(response.data.results.slice(0, 6));
        console.log(movies)
        

      }
      catch (error) {
        console.log("HELLOm3");
        setError(error)
      }
      stopLoading();
    };

    fetchLatestMovies();

  },[loadMovie, setError, stopLoading, setMovies])

  return (
    <div>

      {error && <div>Something went wrong</div>}
      {isLoading ? <div>Loading. Please Wait.</div> : 
          <MovieListUiMovieTile movies = {movies} />
      }   
      
    </div>
  );
};

// interface RootState {
//   isLoading?: boolean,
//   movie?: MovieListDataAccessRecentMoviesInterface[],
//   error?: boolean,
//   loadMovie?,
//   setError?,
//   stopLoading?,
//   setMovie?
// }

const mapStateToProps = ({ isLoading, movies, error }) => ({
    isLoading,
    movies,
    error
})

const mapDispatchToProps = dispatch => {
  return {
      loadMovie: () => dispatch(loadMovie()),
      setMovies: (movieList: Movie[]) => dispatch(setMovies(movieList)),
      setError: error => dispatch(setError(error)),
      stopLoading: () => dispatch(stopLoading()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListDataAccessRecentMoviesIsolate);

export {Movie} from './redux/constants'