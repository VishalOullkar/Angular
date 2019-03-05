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
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { TestService } from './test/test.service';
import { EmployeeService } from './user/employees/shared/employee.service';


import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { ApiexampleComponent } from './apiexample/apiexample.component';
import { RegisterdetailsComponent } from './reactiveforms/registerdetails/registerdetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { UserComponent } from './user/user.component';
import { EmployeesComponent } from './user/employees/employees.component';
import { EmployeeComponent } from './user/employees/employee/employee.component';
import { EmployeeListComponent } from './user/employees/employee-list/employee-list.component';
import { LoginComponent } from './user/login/login.component';
import { TestComponent } from './test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EmployeePipe } from './test/employee.pipe';
import { EmployeesearchPipe } from './user/employees/Shared/employeesearch.pipe';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { AgGridModule } from 'ag-grid-angular';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { SignupService } from './signup/signup.service';
import { AllcontrolsComponent } from './allcontrols/allcontrols.component';
import { myformService } from './allcontrols/myform.service';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';





@NgModule({
  declarations: [

    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    HeroesComponent,
    SignupComponent,
    ReactiveformsComponent,
    HeroDetailsComponent,
    MessagesComponent,
    ApiexampleComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    RegisterdetailsComponent,
    NavbarComponent,
    LogoComponent,
    LoginComponent,
    UserComponent,
    TestComponent,
    EmployeePipe,
    EmployeesearchPipe,
    GridDemoComponent,
    FileuploadComponent,
    AllcontrolsComponent

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
