import { Component, OnInit } from '@angular/core';
import {StudentService} from "../create-student/student.service";
import {Students} from "../create-student/studentList";
import {NgForm} from "@angular/forms";
import {StudentDetails} from "./getDetails";
import {CheckstudentService} from "./checkstudent.service";

@Component({
  selector: 'app-check-student',
  templateUrl: './check-student.component.html',
  styleUrls: ['./check-student.component.css']
})
export class CheckStudentComponent implements OnInit {

  checkMailStudentList:StudentDetails[];
  getStudentDetailsByMail:StudentDetails;

  errorMessage:string;
  hideTable : boolean ;

  public fname:string ="";
  public lname:string ="";
  public emailaddress:string ="";
  public fruitname:string="";

  constructor(private checkstudentService:CheckstudentService) {
  }

  ngOnInit() {
    this.hideTable = false;
  }

  checkEmail(form:NgForm):void{
    var constEmail:string = form.controls['email'].value;
    this.checkstudentService.getStudentDetails(constEmail)
      .subscribe(
        getDetailsByMail =>{

          this.getStudentDetailsByMail = getDetailsByMail,
          this.fname = this.getStudentDetailsByMail[0][1],
          this.lname = this.getStudentDetailsByMail[0][2],
          this.emailaddress = this.getStudentDetailsByMail[0][3],
          this.fruitname = this.getStudentDetailsByMail[0][5]
        } ,
        error => this.errorMessage =error
      );
    this.hideTable = true;
  }


}
