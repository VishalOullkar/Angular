
import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  constructor(private messageService: MessageService) { }

  ngOnInit()
  {

  }
}
