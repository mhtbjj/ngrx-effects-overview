import { ActionReducerMap } from '@ngrx/store';
import { IMoviesListState } from '../movies.state';
import { moviesReducer } from './movies.reducer';

export interface IAppState {
  moviesList: IMoviesListState;
}

export const moviesActionReducersMap: ActionReducerMap<IAppState> = {
  moviesList: moviesReducer,
};
