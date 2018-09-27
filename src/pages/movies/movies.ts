import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie.service';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'movie-list',
  templateUrl: 'movies.html',
})
export class MoviesPage implements OnDestroy {

  movies: any;
  initTialMovieListSubcrip: Subscription;
  movieResultListSubscrip: Subscription;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private movieService: MovieProvider) {

                this.movieService.getMovie('Marvel', '10', '', '');
              this.initTialMovieListSubcrip  = this.movieService.movies$.subscribe((resp: any) => {
                     this.movies = resp.Search;
                  });
  }

  ionViewDidLoad() {
    console.log('loaded movie page');
  }

  searchMovie(ev: any) {
      let keyword = ev.target.value;
      this.movieService.getMovie(keyword, '10', '', '');
      this.movieResultListSubscrip = this.movieService.movies$.subscribe((resp: any) => {
          this.movies = resp.Search;    
      });
  }

  ngOnDestroy() {
    this.initTialMovieListSubcrip.unsubscribe();
    this.movieResultListSubscrip.unsubscribe();
  }
}