import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies:any = null;

  constructor(public navCtrl: NavController,
              public movieService: MovieProvider) {
    
  }

  ionViewDidLoad() {
    
  }

  getItems(ev: any) {
    const val = ev.target.value;
    console.log(val);
  }
}
