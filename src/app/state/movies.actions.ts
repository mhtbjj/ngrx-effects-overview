import { createAction, props } from '@ngrx/store';
import { MoviesActionEnum } from './movies.enum';
import { IMovie } from './movie.model';

// Get Movies
export const getMovies = createAction(MoviesActionEnum.GET_MOVIES);
export const getMoviesSuccess = createAction(
  MoviesActionEnum.GET_MOVIES_SUCCESS,
  props<{ movies: Array<IMovie> }>()
);
export const getMoviesFailed = createAction(
  MoviesActionEnum.GET_MOVIES_FAILED,
  props<{ error: Error | any }>()
);

// Add Movie
export const addMovie = createAction(
  MoviesActionEnum.ADD_MOVIE,
  props<{ movie: IMovie }>()
);
export const addMovieSuccess = createAction(
  MoviesActionEnum.ADD_MOVIE_SUCCESS,
  props<{ movie: IMovie }>()
);
export const addMovieFailed = createAction(
  MoviesActionEnum.ADD_MOVIE_FAILED,
  props<{ error: Error | any }>()
);

// Edit Movie
export const editMovie = createAction(
  MoviesActionEnum.EDIT_MOVIE,
  props<{ movie: IMovie }>()
);
export const editMovieSuccess = createAction(
  MoviesActionEnum.EDIT_MOVIE_SUCCESS,
  props<{ movie: IMovie }>()
);
export const editMovieFailed = createAction(
  MoviesActionEnum.EDIT_MOVIE_FAILED,
  props<{ error: Error | any }>()
);

// Delete Movie
export const deleteMovie = createAction(
  MoviesActionEnum.DELETE_MOVIE,
  props<{ movieId: number }>()
);
export const deleteMovieSuccess = createAction(
  MoviesActionEnum.DELETE_MOVIE_SUCCESS,
  props<{ movieId: number }>()
);
export const deleteMovieFailed = createAction(
  MoviesActionEnum.DELETE_MOVIE_FAILED,
  props<{ error: Error | any }>()
);
