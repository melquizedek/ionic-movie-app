import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesPage } from './movies';
import { MovieProvider } from '../../providers/movie/movie.service';

@NgModule({
  declarations: [
    MoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviesPage),
  ],
  providers: [ MovieProvider ]
})
export class MoviesPageModule {}
