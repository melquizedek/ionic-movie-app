import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie.service';
import { Subscription } from 'rxjs/Subscription';
import { GlobalService } from '../../providers/global.service';
import { FormControl } from '@angular/forms';

/**
 * Generated class for the MovieViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-view',
  templateUrl: 'movie-view.html',
})
export class MovieViewPage implements OnDestroy {

  imdbId: any;
  getMovieByIdSubscript: Subscription;

  Poster:string;
  Title:string;
  Plot:string;
  Ratings:string;
  Released:string;
  Genre:string;
  Director:string;
  Language:string;
  Actors:string;

  isAddComment:boolean = false;
  comment = new FormControl('');

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private CONFIG: GlobalService,
              private movieService: MovieProvider) {
                
                this.imdbId = this.navParams.get('imdbId');

  }

  ionViewDidLoad() {
      
      this.getMovieByIdSubscript = this.movieService.getMovieById(this.imdbId)
          .subscribe((resp: any) => {
            this.Poster = resp.Poster;
            this.Title = resp.Title;
            this.Plot = resp.Plot;
            this.Ratings = resp.Ratings;
            this.Released = resp.Released;
            this.Genre = resp.Genre;
            this.Director = resp.Director;
            this.Language = resp.Language;
            this.Actors = resp.Actors;
          });

  }

  ngOnDestroy() {
    this.getMovieByIdSubscript.unsubscribe();
  }

  addComment() {
    console.log(this.imdbId, this.comment.value);
  }

}