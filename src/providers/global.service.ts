import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  public API_HOST: string = 'http://www.omdbapi.com/?apikey=4d1886d2';
}