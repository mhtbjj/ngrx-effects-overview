import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMoviesListState } from './movies.state';

export const selectMoviesListFeatureState =
  createFeatureSelector<IMoviesListState>('moviesList');

export const selectMoviesList = createSelector(
  selectMoviesListFeatureState,
  (state) => state.movies
);

export const selectMoviesListIsLoaded = createSelector(
  selectMoviesListFeatureState,
  (state) => state.isLoaded
);

export const getErrorMessage = createSelector(
  selectMoviesListFeatureState,
  (state) => state.errorMessage
);
