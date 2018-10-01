import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  public API_HOST: string = 'http://www.omdbapi.com/?apikey=4d1886d2';
  public NO_IMG: string = 'https://images.immediate.co.uk/volatile/sites/3/2017/11/imagenotavailable1-39de324.png?quality=90&lb=300,200&background=white';
}