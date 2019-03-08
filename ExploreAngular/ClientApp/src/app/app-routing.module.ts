import { NgModule, Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { HeroService } from './hero.service';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { ApiexampleComponent } from './apiexample/apiexample.component';
//import {  } from 'rxjs/observable/from';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeesComponent } from './user/employees/employees.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';
import { EmployeeComponent } from './user/employees/employee/employee.component';
import { EmployeeListComponent } from './user/employees/employee-list/employee-list.component';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { AllcontrolsComponent } from './allcontrols/allcontrols.component';
import { ReactiveformComponent } from './basicforms/reactiveform/reactiveform.component';
import { TemplateformComponent } from './basicforms/templateform/templateform.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'Hero', component: HeroesComponent },
  { path: 'SignUp', component: SignupComponent },
  { path: 'Forms', component: ReactiveformsComponent },
  { path: 'APIExample', component: ApiexampleComponent },
  { path: 'Employee', component: EmployeesComponent },
   { path: 'Navbar', component: NavbarComponent},
  { path: 'user', component: UserComponent},
  { path: '', component: LoginComponent, pathMatch: 'full'  },
  { path: 'mycontroller', component: TestComponent },
  { path: 'register', component: EmployeeComponent },
  { path: 'registerdetails', component: EmployeeListComponent },
  { path: 'grid', component: GridDemoComponent },
  { path: 'fileupload', component: FileuploadComponent },
  { path: 'allcontrols', component: AllcontrolsComponent },
  { path: 'BasicReactive', component: ReactiveformComponent },
  { path: 'BasicTemplate', component: TemplateformComponent }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

export const routingComponents = [NavMenuComponent ,HeroDetailsComponent,FetchDataComponent ,HomeComponent, CounterComponent, HeroesComponent, SignupComponent, ReactiveformsComponent,
  ApiexampleComponent, EmployeesComponent, NavbarComponent, UserComponent, LoginComponent, TestComponent,
  EmployeeComponent, EmployeeListComponent, GridDemoComponent, FileuploadComponent, AllcontrolsComponent, ReactiveformComponent, TemplateformComponent]
