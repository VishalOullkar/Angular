import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TestService } from '../test/test.service';
import { EmployeeapiService } from './employeeapi.service';
import { TestModel } from '../test/test-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid-demo',
  templateUrl: './grid-demo.component.html',
  styleUrls: ['./grid-demo.component.css']
})
export class GridDemoComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private columnDefs: any;
  private sortingOrder

  constructor(private http: HttpClient, private empservice: EmployeeapiService) {
    this.columnDefs = [
      {
        headerName: 'FirstName', field: 'FirstName'
      },
      {
        headerName: 'LastName', field: 'LastName'
      },
      {
        headerName: 'Email', field: 'Email'
      },
      {
        headerName: 'EmpCode', field: 'EmpCode'
      },
      {
        headerName: 'Position', field: 'Position'
      },
      {
        headerName: 'Office', field: 'Office'
      }
     
    ];
  }

  onGridReady(params)
  {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    //let datavalues = [{ "FirstName": "Vishal", "Age": 25 },{ "FirstName": "Prakash", "Age": 21 }]

    this.http
      .get('api/EmployeeDetails/GetEmployee').subscribe(data => { params.api.setRowData(data) })
    //params.api.setRowData(datavalues);
  }




  //columnDefs = [
  //{ headerName: 'Make', field: 'make', sortable: true, filter: true },
  //{ headerName: 'Model', field: 'model', sortable: true, filter: true },
  //{ headerName: 'Price', field: 'price', sortable: true, filter: true}
  //  { headerName: 'EmployeeId', field: 'EmployeeId', sortable: true, filter: true },
  //  { headerName: 'FirstName', field: 'FirstName', sortable: true, filter: true },
  //  { headerName: 'LastName', field: 'LastName', sortable: true, filter: true}
  //];

  //rowData = [
  //  { make: 'Toyota', model: 'Celica', price: 35000 },
  //  { make: 'Ford', model: 'Mondeo', price: 32000 },
  //  { make: 'Porsche', model: 'Boxter', price: 72000 }
  //];

  rowData: any;

  ngOnInit() {

    
  }

}
