
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Reactivemodel } from './reactivemodel';
import { ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ReactiveformsService {

  constructor(private http: Http, private httpClient: HttpClient) { }

  EmployeeList: ReactiveFormsModule[];
  SelectedEmployee: ReactiveFormsModule;

  postEmployee(emp: Reactivemodel) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('api/ReactiveFormDatas', body, requestOptions).map(x => x.json());
  }

  PutEmployee(Id:number,emp: Reactivemodel) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('api/ReactiveFormDatas/'+Id, body, requestOptions).map(x => x.json());
  }

  getEmployeeList() {
    this.httpClient.get<ReactiveFormsModule[]>('api/ReactiveFormDatas')
      .map(data => {
        this.EmployeeList = data;
        console.log(data);
        return data;
      })
      .toPromise().then(x => {
      })
  }

  deleteEmployee(Id: number)
  {
    return this.http.delete('api/ReactiveFormDatas/' + Id).map(res => res.json);
  }


}
