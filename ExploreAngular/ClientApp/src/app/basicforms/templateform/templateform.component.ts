import { Component, OnInit } from '@angular/core';
import { Hero1 } from '../Shared/Hero1';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  model: Hero1;
  powers: string[];
  submitted: boolean = false;
  constructor() { }

  ngOnInit() {

    this.model = new Hero1(18, 'Tornado', 'Turbulent Breeze', 'Willie Wind');

    this.powers = ['Really Smart', 'Turbulent Breeze',
      'Super Hot', 'Weather Changer'];
  }
  onSubmit() {
    this.submitted = true;
  }
}
