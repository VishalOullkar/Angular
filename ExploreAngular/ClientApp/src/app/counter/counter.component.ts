import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  public DecrementCounter() {
    this.currentCount--;
  }

  public ResetCounter() {
    this.currentCount=0;
  }

  myarr =["One","two","three"]

  addHero(newHero: string)
  {
    this.myarr.push(newHero);
    newHero = '';
  }

//  Empcollection = Employee;
    
  //objEmployee: Employee[] = [{fname='vishal',lname='askdhg'},]

}

//export interface Employee {
//  fname: string,
//  lname: string
//} 
