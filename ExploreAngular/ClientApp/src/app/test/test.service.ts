import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, } from '@angular/http';
import { TestModel } from './test-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
//@Injectable({
//  providedIn: 'root'
//})
export class TestService {


  selectedEmployee: TestModel;
  employeeList: TestModel[];

  constructor(private http: Http, private httpClient: HttpClient) { }



  //getEmployeeList(): void {
  //  this.http.get<TestModel[]>('api/EmployeeDetails')
  //    .subscribe(result => {
  //      this.employeeList = result;

  //    });
  //}


  //  Get Employee List
  getEmployeeList(){
    this.httpClient.get<TestModel[]>('api/EmployeeDetails/GetEmployee')
      .map(data => {
        this.employeeList = data;
        console.log(data);
        return data;
       
      })
      .toPromise().then(x => {
        //console.log(x);
      })
  }
   
  getEmployeeListById(id: number) {
    this.httpClient.get<TestModel[]>('api/EmployeeDetails/GetEmployeebyId/' + id)
      .map(data => {
        this.employeeList = data;
        console.log(data);
        return data;

      })
      .toPromise().then(x => {
        //console.log(x);
      })
  }


  //Insert employee

  postEmployee(emp: TestModel) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('api/EmployeeDetails/PostEmployee', body, requestOptions).map(x => x.json());
  }


  // Update employee


  putEmployee(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('api/EmployeeDetails/PutEmployee/' + id,body,
     requestOptions).map(res => res.json());
  }

  deleteEmployee(id: number) {
    return this.http.delete('api/EmployeeDetails/DeleteEmployee/' + id).map(res => res.json());
  }




}
