import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { GlobalService } from '../global.service';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  movies$: Observable<any>;
  movieObserver$: Observer<any>;

  constructor(public http: HttpClient, private CONFIG: GlobalService) {
  }

  getMovie(search: string, page: string, year?: string, type?: string) {
      this.movies$ = Observable.create((ob: Observer<any>) => {
          this.movieObserver$ = ob;
          
          let API_URL = this.CONFIG.API_HOST;
          
          if (search.length) API_URL += '&s=' + search;
          if (page.length) API_URL += '&page=' + page; 
          if (year.length) API_URL += '&y=' + year;
          
          API_URL += '&type=' + (type.length) ? type : 'movie';
          API_URL += '&plot=full';

          this.http.get(API_URL).subscribe((resp: any) => {
            this.movieObserver$.next(resp);
          });
      });
  }

}