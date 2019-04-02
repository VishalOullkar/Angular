import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {  } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() pval;


  @Output() public childEvent = new EventEmitter();

  constructor() { }

  fireEvent()
  {
    this.childEvent.emit("Hey! You are Receiving this msg from child component");
  }

  ngOnInit() {
  }

}
