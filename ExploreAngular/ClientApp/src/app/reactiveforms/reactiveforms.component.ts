import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form } from '@angular/forms'
import { Validators } from '@angular/forms';
import { ReactiveformsService } from './reactiveforms.service';
import { ToastrService } from 'ngx-toastr';
import { CombineLatestSubscriber } from 'rxjs/internal/observable/combineLatest';

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

    id: null,
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    mobno: ['', Validators.required],
  });
  get f() { return this.editorFormGrop.controls; }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }



  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.editorFormGrop.invalid) {
      return;
    }

    if (this.editorFormGrop.value.id == null) {

      this.editorFormGrop.value.id = undefined;
      this.reactiveformsService.postEmployee(this.editorFormGrop.value).subscribe(
        data => {
          this.cleardata();
          this.reactiveformsService.getEmployeeList();
          this.toastrService.success('Submitted successfully', 'Employee Record');
        }
      )

    }
    else {
      console.warn('Employee updated');
    }


    console.warn(this.editorFormGrop.value);
  }

  cleardata() {

    this.editorFormGrop.value.id = null;
    this.editorFormGrop.value.firstName = '';
    this.editorFormGrop.value.lastName = '';
    this.editorFormGrop.value.email = '';
    this.editorFormGrop.value.city = '';
    this.editorFormGrop.value.state = '';
    this.editorFormGrop.value.zipCode = '';
    this.editorFormGrop.value.mobno = '';
  }

  public updateName() {
    this.name.setValue('yourName');
  }

  ngOnInit() {
    this.reactiveformsService.getEmployeeList();
  }

}
