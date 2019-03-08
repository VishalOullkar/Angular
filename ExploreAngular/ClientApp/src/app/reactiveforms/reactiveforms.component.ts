import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form, NgForm } from '@angular/forms'
import { Validators } from '@angular/forms';
import { ReactiveformsService } from './reactiveforms.service';
import { ToastrService } from 'ngx-toastr';
import { CombineLatestSubscriber } from 'rxjs/internal/observable/combineLatest';
import { Reactivemodel } from './reactivemodel';
import { config } from 'rxjs';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  submitted = false;
  name = new FormControl('');
  constructor(private fb: FormBuilder, private reactiveformsService: ReactiveformsService, private toastrService: ToastrService) { }
  //editorFormGrop = new FormGroup
  //  ({
  //    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
  //    lastName: new FormControl(''),
  //    addressGroup: new FormGroup
  //      (
  //      {
  //        city: new FormControl(''),
  //        state: new FormControl(''),
  //        zipCode: new FormControl('')
  //      }
  //      )
  //  });

  //editorFormGrop = this.fb.group({
  //    firstName:['',Validators.required],
  //    lastName:'',  
  //    addressGroup: this.fb.group({
  //        city: '',
  //        state:'',
  //        zipCode:''
  //      })
  //  });

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  editorFormGrop = this.fb.group({

    Id: null,
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    City: ['', Validators.required],
    State: ['', Validators.required],
    ZipCode: ['', Validators.required],
    Mobno: ['', Validators.required],
  });


  get f() { return this.editorFormGrop.controls; }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }


  ShowOrEdit(emp: Reactivemodel) {

    this.editorFormGrop.patchValue(emp);
    //this.reactiveformsService.SelectedEmployee = Object.assign({}, emp);

    console.warn(emp);

  }


  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.editorFormGrop.invalid) {
      return;
    }

    if (this.editorFormGrop.value.Id == null) {

      this.editorFormGrop.value.Id = undefined;
      this.reactiveformsService.postEmployee(this.editorFormGrop.value).subscribe(
        data => {
          this.editorFormGrop.reset();
          this.reactiveformsService.getEmployeeList();
          this.toastrService.success('Submitted successfully', 'Employee Record');

        }
      )

    }
    else {
      this.reactiveformsService.PutEmployee(this.editorFormGrop.value.Id, this.editorFormGrop.value)
        .subscribe(
        data => {
          this.reactiveformsService.getEmployeeList();
          
          this.toastrService.info('Updated successfully', 'Employee');
        }
        );
      console.warn('Employee updated');
    }


    console.warn(this.editorFormGrop.value);
  }

  reset()
  {

    this.editorFormGrop.reset();
  }

  deleteEmployee(Id: number)
  {
    console.warn(Id);
    console.warn('delete method executed');
    if (confirm("Are you sure to delete this record ?") == true)
    {
      this.reactiveformsService.deleteEmployee(Id).subscribe(
        data => {
          this.reactiveformsService.getEmployeeList()
          this.toastrService.info('Deleted successfully','Employee')
        });
    }

  }

  public updateName() {
    this.name.setValue('yourName');
  }

  ngOnInit() {
    this.reactiveformsService.getEmployeeList();
   
  
  }

}
