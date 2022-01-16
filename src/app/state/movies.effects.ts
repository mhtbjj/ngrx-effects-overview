import { Injectable } from '@angular/core';
import { MoviesService } from '../movies.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  getMovies,
  getMoviesSuccess,
  getMoviesFailed,
  addMovie,
  addMovieSuccess,
  addMovieFailed,
  deleteMovie,
  deleteMovieSuccess,
  deleteMovieFailed,
  editMovie,
  editMovieSuccess,
  editMovieFailed,
} from '../state/movies.actions';
import { switchMap, map, catchError, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions, private movieService: MoviesService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMovies),
      mergeMap(() =>
        this.movieService.get().pipe(
          map((movies) => getMoviesSuccess({ movies })),
          catchError((error) => [getMoviesFailed(error)])
        )
      )
    )
  );

  addMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addMovie),
      switchMap(({ movie }) =>
        this.movieService.add(movie).pipe(
          map((movie) => addMovieSuccess({ movie })),
          catchError((error) => [addMovieFailed(error)])
        )
      )
    )
  );

  editMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editMovie),
      switchMap(({ movie }) =>
        this.movieService.edit(movie).pipe(
          map((movie) => editMovieSuccess({ movie })),
          catchError((error) => [editMovieFailed(error)])
        )
      )
    )
  );

  deleteMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteMovie),
      switchMap(({ movieId }) =>
        this.movieService.delete(movieId).pipe(
          map(() => deleteMovieSuccess({ movieId })),
          catchError((error) => [deleteMovieFailed(error)])
        )
      )
    )
  );

  successNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editMovieSuccess, addMovieSuccess, deleteMovieSuccess),
        tap((data) => console.info('Success', data.type))
      ),
    { dispatch: false }
  );

  errorNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editMovieFailed, addMovieFailed, deleteMovieFailed),
        tap((data) => console.error('Error', data.type))
      ),
    { dispatch: false }
  );
}
