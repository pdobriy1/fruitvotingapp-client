import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs";
import {FruitList} from "./fruit-list";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Fruits} from "../create-student/fruits";
import {map} from "rxjs/operator/map";


@Injectable()
export class FruitService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http:Http) {
  }

  getFruitVoteCount():Observable<FruitList[]>{
     return this.http
      .get(this.baseUrl+'/votingapp/getvotecount')
      .map(
        (res:Response) => res.json() as FruitList[]
      )
      .map(res => {
          return res;
      })
      .catch(this.handleError);
  }

  getFruitList():Observable<Fruits[]>{
    return this.http
      .get(this.baseUrl+'/votingapp/getfruits')
      .map(
        (res:Response) => res.json()
      )
      .map(res =>{
        return res;
      })
      .catch(this.handleError);

  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
