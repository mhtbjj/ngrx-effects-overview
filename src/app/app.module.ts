import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { moviesActionReducersMap } from './state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './state/movies.effects';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieAddComponent } from './movie-add/movie-add.component';

@NgModule({
  declarations: [AppComponent, MoviesPageComponent, MoviesListComponent, MovieAddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(moviesActionReducersMap),
    EffectsModule.forRoot([MovieEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
