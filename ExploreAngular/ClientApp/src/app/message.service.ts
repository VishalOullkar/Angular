import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];
  public isLogin: boolean = false;

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  constructor() { }



}
