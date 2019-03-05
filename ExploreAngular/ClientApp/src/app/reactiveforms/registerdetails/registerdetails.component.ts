import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registerdetails',
  templateUrl: './registerdetails.component.html',
  styleUrls: ['./registerdetails.component.css']
})

@Injectable()


export class RegisterdetailsComponent implements OnInit {

  message: any;

  constructor(private http: HttpClient, baseUrl: string) {
    //http.get<string>("api/Emlpoyee/" + "mySampleMetahod").subscribe(result => {
    //  this.message = result;
    //}, error => console.error(error));
    //alert(this.message);
    //console.log(this.message);
  }
  employeeList: Employee[];
  selectedEmployee: Employee;


  getEmployeeList() {
    //this.http.get('Employee/EmployeeDetailsGet')
    //  .map((data: Response) => {
    //    return data.json() as Employee[];
    //  }).toPromise().then(x => {
    //    this.employeeList = x;
    //  })

    //this.http.get<Employee[]>('api/Employee/EmployeeDetailsGet')
    //  .subscribe(result => {
    //    this.employeeList = result
    //  })
  }
  

  ngOnInit() {
    this.http.get<string>("api/Employee/mySampleMetahodGet").subscribe(result => {
      this.message = result;
    }, error => console.log(error)  ) ;
    // alert(error);
    //console.log(error);
   
  }

}

class Employee
{
  EmployeeID: number;
  FirstName:string;  
  LastName :string;
  Gender   :string;
  Salary   :string;
}                         
