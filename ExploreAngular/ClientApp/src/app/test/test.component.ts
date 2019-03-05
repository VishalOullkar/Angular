import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestModel } from '../test/test-model';
import { TestService } from './test.service';
import { NgForm } from '@angular/forms'

import { Observable } from 'rxjs';
import { strict } from 'assert';
import { DateFormatter } from 'ngx-bootstrap/datepicker/public_api';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  ngOnInit() {
    this.testService.getEmployeeList();
    this.reset();

  }


  msg: string;
  FirstName: string;
  empList: TestModel[];
  constructor(private testService: TestService, private toastrService:ToastrService) { }      //private http: HttpClient


  reset(form?: NgForm) {
    if (form != null)
      form.reset();

    this.testService.selectedEmployee =
      {

        EmployeeID: null,
        FirstName: '',
        LastName: '',
        EmpCode: '',
        Position: '',
        Office: '',
        email: '',
        password: ''
      }
  }

   
  showoredit(emp: TestModel) {
    //console.warn(this.testService.selectedEmployee);
    this.testService.selectedEmployee = Object.assign({}, emp);
  }


  ondelete(id: number) {
    if (confirm("Are you sure to delete this record") == true) {
      this.testService.deleteEmployee(id)
        .subscribe(x => {
          this.testService.getEmployeeList();
          this.msg = "record deleted successfully";
        }
        );
    }

  }



  Onsubmit(form: NgForm) {
    console.warn(form.value);
    if (form.value.EmployeeID == null) {
      this.testService.postEmployee(form.value)
        .subscribe();
      this.reset(form);
      this.testService.getEmployeeList();
      this.toastrService.success("Submitted successfuly ! ", "Employee details")
    }
    else {
      

      this.testService.putEmployee(form.value.EmployeeID, form.value)
        .subscribe();
      this.reset(form);
      this.testService.getEmployeeList();
      this.toastrService.warning("Updated successfuly ! ", "Employee details")
      this.msg = "Updated Successful";
    }
  }


 



}
