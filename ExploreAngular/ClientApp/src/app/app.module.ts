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
import { DynamicControlsComponent } from './dynamic-controls/dynamic-controls.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { GridBatchEditingComponent } from './grid/grid-batch-editing/grid-batch-editing.component';
import { GridTransactionComponent } from './grid/grid-batch-editing/grid-transaction.component';
import {
  IgxGridModule,
  IgxDialogModule,
  IgxButtonModule,
  IgxFocusModule
} from "igniteui-angular";
import { IgxGridBatchEditingComponent } from './grid/igx-grid-batch-editing/igx-grid-batch-editing.component';



// For FusionChart   
//import * as FusionCharts from 'fusioncharts';
//import * as Charts from '//fusioncharts/fusioncharts.charts';
//import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
//import { FusionChartsModule } from 'angular4-fusioncharts';
//import { ColumnChartComponent } from './column-chart/column-chart.component';
//FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme); 

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MessagesComponent,
    RegisterdetailsComponent,
    EmployeePipe,
    EmployeesearchPipe,
    DynamicControlsComponent,
    GridBatchEditingComponent,
    GridTransactionComponent,
    IgxGridBatchEditingComponent
   

    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,AngularDateTimePickerModule,
    FormsModule, HttpModule, RouterModule, NgbModule, NgxPaginationModule, OrderModule,
    ReactiveFormsModule, AppRoutingModule, BrowserAnimationsModule,
    BsDatepickerModule.forRoot(), AgGridModule.withComponents([GridDemoComponent]),
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right'
    }),
    IgxGridModule,
    IgxDialogModule,
    IgxButtonModule,
    IgxFocusModule
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
