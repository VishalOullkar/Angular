import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { myformService } from './myform.service';
import { Employeemodel } from './employeemodel';
import { strict } from 'assert';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-allcontrols',
  templateUrl: './allcontrols.component.html',
  styleUrls: ['./allcontrols.component.css']
})
export class AllcontrolsComponent implements OnInit {

  msg: string;
  selectedFile: File = null;
  dateOfBirth: Date;
  datePickerConfig: Partial<BsDatepickerConfig>;

  customdate: any;



  constructor(private myservice: myformService, private toasterservice: ToastrService, private datePipe: DatePipe) {

    this.customdate = this.datePipe.transform('25-Feb-2018', 'dd/MMM/yyyy');
   


    this.msg = "";
    this.dateOfBirth = new Date(2015, 1, 2);
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',//'theme-dark-blue'
        showWeekNumbers: false,
        dateInputFormat: 'DD-MMM-YYYY',
        minDate: new Date(2015, 1, 2),
        maxDate: new Date(2019, 2, 13),
        displayMonths: 1,
        selectWeek: true
      }
    );
  }

  

  onFileSelected(event) {

    //    this.selectedFileFile = null;
    //console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  ShowOrEdit(emp: Employeemodel) {
    this.myservice.getEmployeeList();
    this.myservice.SelectedEmployee = Object.assign({}, emp);
  }


  savedata(form: NgForm) {

    if (form.value.Id == null) {

      form.value.Id = undefined;
      this.myservice.postEmployeess(form.value)
        .subscribe();



      this.resetdata(form);
      this.myservice.getEmployeeList();
      this.toasterservice.success("Submitted successfuly", "Employee record")
      //this.msg = 'Submitted successfully';
      //console.warn('If part executed');
    }
    else {
      this.myservice.putEmployee(form.value.Id, form.value).subscribe(
        data => {
          this.resetdata(form);
          this.myservice.getEmployeeList();
          this.toasterservice.warning("Updated successfuly","Employee record")
          //this.msg = "Updated successfuly"
          //console.warn('Else part executed');
        });

    }
  }

  resetdata(form?: NgForm) {
    if (form != null)
      form.reset()
       
    this.myservice.SelectedEmployee =
      {
        Id: null,
        Name: "",
        Gender: "",
        Country: "",
        Dob: new Date(),
        IsActiveEmp: false,
        Imageurl: ""

      }
  }
  ngOnInit() {

    console.warn(this.customdate);
    this.myservice.getEmployeeList();
    console.warn(this.myservice.EmployeeList);
    this.resetdata()
    this.myservice.getCountry();

  }

}
