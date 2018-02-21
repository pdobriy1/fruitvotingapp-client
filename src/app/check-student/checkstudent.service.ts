import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {StudentDetails} from "./getDetails";
import {Students} from "../create-student/studentList";

@Injectable()
export class CheckstudentService {

  private baseUrl = "http://localhost:8080";
  constructor(private http:Http) { }

  getStudentDetails(email:string):Observable<StudentDetails>{
    return this.http.get(
      this.baseUrl+'/votingapp/getstudentvote/'+email+"/"
    ).map(
        (res:Response) => res.json() as StudentDetails

      )
      .map(res =>{
        return res;
      })
      ;
  }

}
