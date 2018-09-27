import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieViewPage } from './movie-view';

@NgModule({
  declarations: [
    MovieViewPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieViewPage),
  ],
})
export class MovieViewPageModule {}
