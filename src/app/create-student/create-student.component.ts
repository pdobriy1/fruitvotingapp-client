import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Students} from "./studentList";
import {FruitService} from "../fruit-listing/fruit.service";
import {Fruits} from "./fruits";
import {StudentService} from "./student.service";


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  errorMessage:string;
  fruitList:Fruits[];
  studentList:Students[];
  emailAlreadyExist:string="";
  voteEmpty:string="";
  selectedFruitIdByStudent:number;
  selectedFruitNameByStudent:string;
  disableVote:boolean;

  constructor(private fruitService:FruitService,private studentService:StudentService) { }

  ngOnInit() {
   this.getFruitList();
   this.getStudent();
   this.disableVote = false;
  }

  submitStudentDetials(form:NgForm):boolean{

    const fname = form.controls['firstname'].value;
    const lname = form.controls['lastname'].value;
    const email = form.controls['email'].value;
    const fruitid = this.selectedFruitIdByStudent;
    //if vote is empty
    if (fruitid == null){
      this.voteEmpty = "You did not Vote .Kindly Vote !!";
      return false;
    }
    //validate email
    for (var i = 0;i < this.studentList.length;i++){
      if(email === this.studentList[i][3]){
        this.emailAlreadyExist = "Email Already Exist";
        return false;
      }
    }

    var newStudentDetails = new Students();
    newStudentDetails.firstname = fname;
    newStudentDetails.lastname = lname;
    newStudentDetails.emailaddress = email;
    newStudentDetails.fruitId = fruitid;



    this.studentService.createStudentVote(newStudentDetails)
      .subscribe( student =>{
          form.reset();
          newStudentDetails = new Students();
      },
      error => this.errorMessage =<any>error);
      return true;

  }

  getStudent():void{
    this.studentService.getStudentDetail()
      .subscribe(
        (studenttemp:Students[]) => {
          this.studentList = studenttemp;
        },
        error => this.errorMessage = error

      );

  }

  fruitVoteById(fruitid:number,fruitname:string){

    this.selectedFruitIdByStudent = fruitid;
    this.selectedFruitNameByStudent = fruitname;
  }

  getFruitList():void{
    this.fruitService.getFruitList()
      .subscribe(
        fruitListArray => this.fruitList = fruitListArray,
        error=>console.log("Error " +error)
      );
  }

}
