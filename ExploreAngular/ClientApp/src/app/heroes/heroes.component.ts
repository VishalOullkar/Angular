import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../Model/hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroservice:HeroService) { }

  myvar = "";
  btnText: string = 'Add an Item';
  val1: string
  myvarname = "";


  title = "Tour of heroes";
  myHero: string;
  heroes: Hero[];



  //heroes = ['John','Vishal','Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
   
  }
  //getHeroes(): any  {
  //  this.heroes = this.heroservice.getHeroes();
  //  console.log(this.heroes);
  //}


  ngOnInit() {
    //this.heroes = [
    //  new Hero(1, 'Windstorm'),
    //  new Hero(13, 'Bombasto'),
    //  new Hero(15, 'Magneta'),
    //  new Hero(20, 'Tornado')
    //];
    // this.myHero = "Vishal"
    this.heroservice.getHeroes().subscribe(heroes => this.heroes = heroes);


    this.myHero = this.heroes[0].name;
    }


    
  //}

}
