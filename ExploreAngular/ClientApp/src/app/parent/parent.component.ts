import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  public name: string = "VISHAL";

  public message: string = "";


  printFoo(param) {
    if (param) {
      let y;
        y= "msg";
    var x = "foo";
  }

    console.log(x);
    
  }

  ngOnInit() {
  }

}
