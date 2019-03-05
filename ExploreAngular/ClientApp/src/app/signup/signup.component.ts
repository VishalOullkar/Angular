import { Component, OnInit, Pipe } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { NgForm } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;

  selecteddate: NgbDateStruct;
  date: { year: number, month: number };


  employeename: string;
  //country: string;


  dateOfBirth: Date;
  isActive: boolean;
  submitted= false;

  savedata()
  {
    console.warn('Testing');
    this.submitted = true;

    //if (form != null)
    //{
    //  console.warn(form.value);
    //}

  }

  resetdata(form?: NgForm) {
    if (form != null)
      form.reset()

    this.signupService.SelectedEmployee =
      {
      Id: null,
      Name: "",
      Gender: false,
      Country: "",
      Dob: new Date(2015, 1, 2),
      IsActiveEmp: false,
      Imageurl:""
                                
      }
 }


  constructor(private calendar: NgbCalendar,private signupService: SignupService) {


    //this.signupService.SelectedEmployee.Country
    //this.signupService.SelectedEmployee.Dob
    //this.signupService.SelectedEmployee.Gender
    //this.signupService.SelectedEmployee.Id
    //this.signupService.SelectedEmployee.Imageurl
    //this.signupService.SelectedEmployee.IsActiveEmp
    //this.signupService.SelectedEmployee.Name


    //this.country = "";
    this.employeename = "";
    this.isActive = true;

    this.dateOfBirth = new Date(2015,1,2);
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-orange',//'theme-dark-blue'
        showWeekNumbers: false,
        dateInputFormat: 'DD-MMM-YYYY',
        minDate: new Date(2015, 1, 2),
        maxDate: new Date(2019, 1, 13),
        displayMonths: 1,
        selectWeek: true
       }
    );

  }



  selectToday() {
    this.selecteddate = this.calendar.getToday();
    console.warn(this.selecteddate);
  }

  ngOnInit() {

    this.resetdata()
    this.signupService.getCountry();


    //this.dateOfBirth = '6/6/2015';
    //console.warn(this.dateOfBirth);
  }

}
