import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const RECENT_MOVIES_FEATURE_KEY = 'recentMovies';

/*
 * Update these interfaces according to your requirements.
 */
export interface RecentMoviesEntity {
  id: number;
}

export interface RecentMoviesState extends EntityState<RecentMoviesEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const recentMoviesAdapter = createEntityAdapter<RecentMoviesEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchRecentMovies())
 * }, [dispatch]);
 * ```
 */
export const fetchRecentMovies = createAsyncThunk(
  'recentMovies/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getRecentMoviess()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialRecentMoviesState: RecentMoviesState = recentMoviesAdapter.getInitialState(
  {
    loadingStatus: 'not loaded',
    error: null,
  }
);

export const recentMoviesSlice = createSlice({
  name: RECENT_MOVIES_FEATURE_KEY,
  initialState: initialRecentMoviesState,
  reducers: {
    add: recentMoviesAdapter.addOne,
    remove: recentMoviesAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecentMovies.pending, (state: RecentMoviesState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchRecentMovies.fulfilled,
        (
          state: RecentMoviesState,
          action: PayloadAction<RecentMoviesEntity[]>
        ) => {
          recentMoviesAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(
        fetchRecentMovies.rejected,
        (state: RecentMoviesState, action) => {
          state.loadingStatus = 'error';
          state.error = action.error.message;
        }
      );
  },
});

/*
 * Export reducer for store configuration.
 */
export const recentMoviesReducer = recentMoviesSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(recentMoviesActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const recentMoviesActions = recentMoviesSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllRecentMovies);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = recentMoviesAdapter.getSelectors();

export const getRecentMoviesState = (rootState: unknown): RecentMoviesState =>
  rootState[RECENT_MOVIES_FEATURE_KEY];

export const selectAllRecentMovies = createSelector(
  getRecentMoviesState,
  selectAll
);

export const selectRecentMoviesEntities = createSelector(
  getRecentMoviesState,
  selectEntities
);
