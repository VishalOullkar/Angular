import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employeemodel } from './employeemodel';
import { Countrymodel } from './countrymodel';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { observable, Observable } from 'rxjs';

//@Injectable()
@Injectable({
  providedIn: 'root'
})
export class myformService {

  constructor(private httpClient: HttpClient,private http:Http) { }

  countrylist: Countrymodel[];

  EmployeeList: Employeemodel[];
  SelectedEmployee: Employeemodel;


  //getCountry() {
  //  this.httpClient.get<Countrymodel[]>('api/Countries/GetTblCountry')
  //    .map(data => {
  //      this.countrylist = data;
  //      //console.log(data);
  //      return data;
  //    })
  //    .toPromise().then(x => {
  //    })
  //}

  getCountry(): Observable<Countrymodel[]> {
    return this.httpClient.get<Countrymodel[]>('api/Countries/GetTblCountry').catch(this.errorhandler)
 
  }
  //getEmployeeList() {
  //  this.httpClient.get<Employeemodel[]>('api/MyForms/GetEmployees')
      
  //    .map(data => {
  //      this.EmployeeList = data;
  //      console.log(data);
  //      return data;
  //    })
      
  //    .toPromise().then(x => {
  //    })
  //    .catch(this.errorhandler)
  //}
  getEmployeeList(): Observable<Employeemodel[]> {
    return this.httpClient.get<Employeemodel[]>('api/MyForms/GetEmployees').catch(this.errorhandler)
      

  }

  errorhandler(error: HttpErrorResponse) {
    return Observable.throw(error.message||"Server error")
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
  deleteEmployee(id:number)
  {
    return  this.http.delete('api/MyForms/DeleteEmployee/' + id).map(res=>res.json());
  }

  }






