import { Movie } from '@myorg/redux';

import axios from 'axios';

const apiKey = '6bdadca3d1b9326a88bf6ed432cba4d0';

export const fetchLatestMovies = async (): Promise<Movie[]> => {
  const response = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);

  if (response.status >= 400) {
      throw new Error(response.statusText);
  }

  return response.data.results.slice(0,6);
}

export const fetchSearchMovies = async (query: string): Promise<Movie[]> => {
  
  if(query === '') {
    const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);

    if (response.status >= 400) {
      throw new Error(response.statusText);
    }

    return response.data.results.slice(0,6);
  }
  else {
    const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);

    if (response.status >= 400) {
      throw new Error(response.statusText);
    }

    return response.data.results.slice(0,6);
  }
}