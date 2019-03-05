import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, } from '@angular/http';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { TestModel } from '../test/test-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeapiService {


  selectedEmployee: TestModel;
  employeeList: TestModel[];

  constructor(private httpClient: HttpClient) { }

  //  Get Employee List
  getEmployeeList(){
    this.httpClient.get<TestModel[]>('https://localhost:44363/api/EmployeeDetails/GetEmployee')
      .map(data => {
        this.employeeList = data;
        //console.log(data);
        return data;

      })
      .toPromise().then(x => {
        //console.log(x);
      })
  }

}
