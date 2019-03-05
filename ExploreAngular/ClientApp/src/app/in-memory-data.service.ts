import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Model/hero';

@Injectable()
export class InMemoryDataService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Bin' },
      { id: 12, name: 'Anil kappor' },
      { id: 13, name: 'Varun Dhavan' },
      { id: 14, name: 'Akshay kumar' },
      { id: 15, name: 'Govinda' },
      { id: 16, name: 'Ajay Devgan' },
      { id: 17, name: 'Sahhrukh khan' },
      { id: 18, name: 'Amitabh Bachan' },
      { id: 19, name: 'Amir kahn' },
      { id: 20, name: 'Sani Deol' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }

}
