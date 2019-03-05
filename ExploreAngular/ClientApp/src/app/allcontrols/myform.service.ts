import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Employeemodel } from './employeemodel';
import { Countrymodel } from './countrymodel';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
//@Injectable({
//  providedIn: 'root'
//})
export class myformService {

  constructor(private httpClient: HttpClient,private http:Http) { }

  countrylist: Countrymodel[];

  EmployeeList: Employeemodel[];
  SelectedEmployee: Employeemodel;


  getCountry() {
    this.httpClient.get<Countrymodel[]>('api/Countries/GetTblCountry')
      .map(data => {
        this.countrylist = data;
        //console.log(data);
        return data;
      })
      .toPromise().then(x => {
      })
  }
  getEmployeeList() {
    this.httpClient.get<Employeemodel[]>('api/MyForms/GetEmployees')
      .map(data => {
        this.EmployeeList = data;
        console.log(data);
        return data;
      })
      .toPromise().then(x => {
      })
  }


  postEmployeess(emp: Employeemodel) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('api/MyForms/PostEmployeeForms', body, requestOptions).map(x => x.json());
  }

  putEmployee(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('api/MyForms/PutEmployee/' + id, body,
      requestOptions).map(res => res.json());
  }

  }






