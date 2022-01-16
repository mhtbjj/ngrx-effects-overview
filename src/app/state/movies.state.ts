import { IMovie } from './movie.model';

export interface IMoviesListState {
  movies: Array<IMovie>;
  isLoaded?: boolean; //optional field
  errorMessage: string;
}

export const initialMoviesListState: IMoviesListState = {
  movies: [],
  errorMessage: '',
};
