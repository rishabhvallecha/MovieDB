import {
  fetchRecentMovies,
  recentMoviesAdapter,
  recentMoviesReducer,
} from './recent-movies.slice';

describe('recentMovies reducer', () => {
  it('should handle initial state', () => {
    const expected = recentMoviesAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(recentMoviesReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchRecentMoviess', () => {
    let state = recentMoviesReducer(
      undefined,
      fetchRecentMovies.pending(null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = recentMoviesReducer(
      state,
      fetchRecentMovies.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = recentMoviesReducer(
      state,
      fetchRecentMovies.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
