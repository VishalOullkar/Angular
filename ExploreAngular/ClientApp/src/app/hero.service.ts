import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HEROES } from '../app/Model/mock-heroes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from './Model/hero';

@Injectable()

export class HeroService {

  private heroesUrl = 'api/heroes'
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
    //return this.http.get<Hero[]>(this.heroesUrl)
      
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
 
  

}
