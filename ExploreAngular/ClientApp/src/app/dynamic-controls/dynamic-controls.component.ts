import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form, NgForm, Validators, FormArray } from '@angular/forms'


@Component({
  selector: 'app-dynamic-controls',
  templateUrl: './dynamic-controls.component.html',
  styleUrls: ['./dynamic-controls.component.css']
})
export class DynamicControlsComponent implements OnInit {
   
  Value: string;
  // Used To Specify Title using Interpolation    
  title = 'Working With Array In Angular 5';

  // Array where we are going to do CRUD operations    
  myItems: MyItems[] = new Array();
  constructor(private fb: FormBuilder) {
      // Provide some values to the array    
    this.myItems.push(
      new MyItems("First Value"),
      new MyItems("Second Value"),
      new MyItems("Third Value"),
      new MyItems("Forth Value"),
      new MyItems("Fifth Value")
    );  
  }

   // Other variables    
  IsForUpdate: boolean = false;
  newItem: any = {};
  updatedItem;

  // To add new item in array    
  AddItem() {
    this.myItems.push(
      this.newItem
    );
    this.newItem = {};
    console.warn(this.myItems);
  }    

  // When user selects edit option  
  EditItem(i) {
    this.newItem.Value = this.myItems[i].Value;
    this.updatedItem = i;
    this.IsForUpdate = true;
  }
  DeleteItem(i) {

    if (confirm("Do you want to delete ?") == true)
    {
      this.myItems.splice(i, 1);
    }

  }

  // When user clicks on update button to submit updated value  
  UpdateItem() {
    let data = this.updatedItem;
    for (let i = 0; i < this.myItems.length; i++) {
      if (i == data) {
        this.myItems[i].Value = this.newItem.Value;
      }
    }
    this.IsForUpdate = false;
    this.newItem = {};
  }



  savetext: boolean=false;
  //newAttribute:any= {};
  fieldArray: Array<any> = [];

  get hobbies()
  { return this.myformgroup.get('hobbies') as FormArray; }


  addhobbies()
  {
    this.hobbies.push(this.fb.control(''))
    this.savetext = true;

  }

  savedata()
  {
    console.warn(this.hobbies.value);
  }


  //addFieldValue(index) {
  //  if (this.fieldArray.length <= 2) {
  //    this.fieldArray.push(this.newAttribute);
  //    this.newAttribute = {};
  //  } else {

  //  }
  //}

  myformgroup = this.fb.group(
    {
      name: ['', Validators.required],
      hobbies:this.fb.array([])
    })

  ngOnInit() {
  }

}

export class MyItems {
  Value: string;
  constructor(Value: string) {
    this.Value = Value;
  }
}  
