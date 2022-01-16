import { createReducer, on } from '@ngrx/store';
import { IMoviesListState, initialMoviesListState } from '../movies.state';
import * as MoviesListActions from '../movies.actions';

export const moviesReducer = createReducer(
  initialMoviesListState,
  //   on(MoviesListActions.addMovie, (state, action) => {}),
  on(MoviesListActions.addMovieSuccess, (state, action): IMoviesListState => {
    let storeMovies = [...state.movies];
    let movieAddedIndex = storeMovies.findIndex(
      (el) => el.id == action.movie.id
    );

    if (movieAddedIndex == -1) storeMovies.push(action.movie);
    else storeMovies[movieAddedIndex] = action.movie;

    return { ...state, movies: storeMovies };
  }),
  on(MoviesListActions.addMovieFailed, (state, action): IMoviesListState => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),
  //   on(MoviesListActions.getMovies, (state, action) => {}),
  on(MoviesListActions.getMoviesSuccess, (state, action): IMoviesListState => {
    return { ...state, movies: action.movies };
  }),
  on(MoviesListActions.getMoviesFailed, (state, action): IMoviesListState => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),
  //   on(MoviesListActions.editMovie, (state, action) => {}),
  on(MoviesListActions.editMovieSuccess, (state, action): IMoviesListState => {
    let storeMovies = [...state.movies];
    let movieAddedIndex = storeMovies.findIndex(
      (el) => el.id == action.movie.id
    );

    if (movieAddedIndex == -1) storeMovies.push(action.movie);
    else storeMovies[movieAddedIndex] = action.movie;

    return { ...state, movies: storeMovies };
  }),
  on(MoviesListActions.editMovieFailed, (state, action): IMoviesListState => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),
  //   on(MoviesListActions.deleteMovie, (state, action) => {}),
  on(
    MoviesListActions.deleteMovieSuccess,
    (state, action): IMoviesListState => {
      return {
        ...state,
        movies: state.movies.filter((el) => el.id != action.movieId),
      };
    }
  ),
  on(MoviesListActions.deleteMovieFailed, (state, action): IMoviesListState => {
    return {
      ...state,
      errorMessage: action.error,
    };
  })
);
