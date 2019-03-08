import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { TestService } from './test/test.service';
import { EmployeeService } from './user/employees/shared/employee.service';


import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { RegisterdetailsComponent } from './reactiveforms/registerdetails/registerdetails.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EmployeePipe } from './test/employee.pipe';
import { EmployeesearchPipe } from './user/employees/Shared/employeesearch.pipe';
import { AgGridModule } from 'ag-grid-angular';
import { SignupService } from './signup/signup.service';
import { myformService } from './allcontrols/myform.service';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { GridDemoComponent } from './grid-demo/grid-demo.component';





@NgModule({
  declarations: [

    AppComponent,
    routingComponents,
    MessagesComponent,
    RegisterdetailsComponent,
    EmployeePipe,
    EmployeesearchPipe
 
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,AngularDateTimePickerModule,
    FormsModule, HttpModule, RouterModule, NgbModule, 
    ReactiveFormsModule, AppRoutingModule, BrowserAnimationsModule,
    BsDatepickerModule.forRoot(), AgGridModule.withComponents([GridDemoComponent]),
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right'
    })
    //RouterModule.forRoot([
    //  { path: '', component: HomeComponent, pathMatch: 'full' },
    //  { path: 'counter', component: CounterComponent },
    //  { path: 'fetch-data', component: FetchDataComponent },
    //  { path: 'Hero', component: HeroesComponent },
    //  { path: 'SignUp', component: SignupComponent },
    //  { path: 'Forms', component: ReactiveformsComponent },
    //]),
    
  ],
  providers: [HeroService, EmployeeService, MessageService, TestService, SignupService, myformService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
