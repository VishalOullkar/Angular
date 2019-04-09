import { Component, OnInit } from '@angular/core';
import { IgxTransactionService, IgxGridTransaction } from "igniteui-angular";

@Component({
  providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
  selector: 'app-grid-transaction',
  template: "<ng-content></ng-content>"
  //templateUrl: './grid-transaction.component.html',
  //styleUrls: ['./grid-transaction.component.css']
})
export class GridTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
