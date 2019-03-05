import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers,RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Employeemodel } from './employeemodel';
import { Countrymodel } from './countrymodel';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient,private http:Http) { }

  countrylist: Countrymodel[];
  EmployeeList: Employeemodel[];
  SelectedEmployee: Employeemodel;


  //getEmployeeList() {
  //  this.httpClient.get<TestModel[]>('api/EmployeeDetails/GetEmployee')
  //    .map(data => {
  //      this.employeeList = data;
  //      // console.log(data);
  //      return data;

  //    })
  //    .toPromise().then(x => {
  //      //console.log(x);
  //    })
  //}

  getCountry() {
    this.httpClient.get<Countrymodel[]>('api/Countries/GetTblCountry')
      .map(data => {
        this.countrylist = data;
        console.log(data);
        return data;
      })
      .toPromise().then(x => {
      })
  }


  postEmployee(emp: Employeemodel) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('', body, requestOptions).map(x => x.json());
  }

  }






