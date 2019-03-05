import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { EmployeeService } from '../shared/employee.service'
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  msg: string;
  constructor(private employeeService: EmployeeService,private toastr: ToastrService ) { }
 

  ngOnInit() {
    this.resetForm();
  }



  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();

    this.employeeService.selectedEmployee =   {
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

 

  onSubmit(form: NgForm) {
    if (form.value.EmployeeId == null) {
  
      this.employeeService.postEmployee(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.employeeService.getEmployeeList();
          this.msg = '';
          this.toastr.success('New Record Added Succcessfully', 'Employee Register');
          //this.msg = 'New Record Added Succcessfully';
          //console.log('Record added');
        })
    }
    else {
      this.employeeService.putEmployee(form.value.EmployeeId, form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.employeeService.getEmployeeList();
          this.msg = '';
          this.toastr.warning('Record Updated Successfully!','Employee Register');
          //console.log('Record updated1');
          //this.msg = 'Record Updated Successfully';


        });
    }
  }
}
