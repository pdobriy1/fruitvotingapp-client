import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Students} from "./studentList";
import {error} from "selenium-webdriver";

@Injectable()
export class StudentService{

  studentList:Students[];
  private baseUrl = "http://localhost:8080";

  constructor(private http:Http){}
  getStudentDetail():Observable<Students[]>{
    return this.http.get(this.baseUrl+'/votingapp/getstudents/')
      .map(
        (res:Response) => res.json() as Students[]
      )
      .map(res =>{
        return res;
      }

  )
  .catch(this.handleError);
  }


  createStudentVote(addStudentForm:Students):Observable<Students>{
    let headers = new Headers({'Content-Type':'application/json;charset=UTF-8'});
    let options = new RequestOptions({headers:headers});

    console.log(addStudentForm);
    var objectToSend = JSON.stringify(addStudentForm);
    console.log(objectToSend);

    return this.http
      .post(this.baseUrl+'/votingapp/insert',objectToSend,options)

      .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));

  }



  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
