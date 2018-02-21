import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing";
import { CreateStudentComponent } from './create-student/create-student.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FruitListingComponent } from './fruit-listing/fruit-listing.component';
import {FruitService} from "./fruit-listing/fruit.service";
import {StudentService} from "./create-student/student.service";
import {ChartsModule} from "ng2-charts";
import { CheckStudentComponent } from './check-student/check-student.component';
import {StudentDetails} from "./check-student/getDetails";
import {CheckstudentService} from "./check-student/checkstudent.service";

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    HomeComponent,
    HeaderComponent,
    FruitListingComponent,

    CheckStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [FruitService,StudentService,CheckstudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
