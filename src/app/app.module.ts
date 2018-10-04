import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MoviesPage } from '../pages/movies/movies';
import { MovieProvider } from '../providers/movie/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from '../providers/global.service';
import { MovieViewPage } from '../pages/movie-view/movie-view';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RatingsPage } from '../pages/ratings/ratings';
import { Ionic2RatingModule } from 'ionic2-rating';

export const firebaseConf = {
  apiKey: "AIzaSyC_MZY9iMpZTVQfPJS8nJY8xsWiMUL2PW0",
  authDomain: "movie-app-directory.firebaseapp.com",
  databaseURL: "https://movie-app-directory.firebaseio.com",
  projectId: "movie-app-directory",
  storageBucket: "movie-app-directory.appspot.com",
  messagingSenderId: "350925860108"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoviesPage,
    MovieViewPage,
    RatingsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    AngularFireModule.initializeApp(firebaseConf),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MoviesPage,
    MovieViewPage,
    RatingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    GlobalService
  ]
})
export class AppModule {}
