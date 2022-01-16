import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';
import { IMovie } from '../state/movie.model';

import * as MoviesListActions from '../state/movies.actions';
import { selectMoviesList } from '../state/movies.selectors';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit {
  // Traditional Service Based Approach
  // movies: Movie[];

  // constructor(private movieService: MoviesService) {}

  // ngOnInit() {
  //   this.movieService.getAll().subscribe((movies) => (this.movies = movies));
  // }

  // NgRx Store & Effect Based Approach
  movies$: Observable<IMovie[]>;

  constructor(private store: Store<{ movies: IMovie[] }>) {
    this.movies$ = this.store.select(selectMoviesList);
  }

  ngOnInit() {
    this.store.dispatch(MoviesListActions.getMovies());
  }

  delete(id: number): void {
    this.store.dispatch(MoviesListActions.deleteMovie({ movieId: id }));
  }
  itemClickedEvent() {}
}
