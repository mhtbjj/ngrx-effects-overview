import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovie } from '../state/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  @Input() movies: IMovie[] | null = [];
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output() itemClickedEvent: EventEmitter<IMovie> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteItem(event: MouseEvent, id: number): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.deleteEvent.emit(id);
  }
}
