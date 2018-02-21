import {Component, OnDestroy, OnInit} from '@angular/core';
import {FruitService} from "./fruit.service";
import {FruitList} from "./fruit-list";
import 'rxjs';
import {setInterval} from "timers";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-fruit-listing',
  templateUrl: './fruit-listing.component.html',
  styleUrls: ['./fruit-listing.component.css']
})
export class FruitListingComponent implements OnInit,OnDestroy {

  fruitListings:FruitList[];
  tempFruitListings:FruitList[];

  errorMessage:String;
  public doughnutChartLabels: string[]=[] ;
  public doughnutChartData: number[]=[];
  public doughnutChartType = 'doughnut';

  // lineChart
  public lineChartData:number[] =[];
  public lineChartLabels:string[]=[];
  public lineChartType:string = 'line';

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.doughnutChartType = this.doughnutChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  constructor(private fruitService:FruitService) {
  }

  ngOnInit():void {
       this.fetchVotes();
      setInterval(()=>this.fetchVotes(),10000);
  }


  fetchVotes():void{
    this.lineChartLabels.length=0;
    this.lineChartData.length=0;
    this.doughnutChartLabels.length=0;
    this.doughnutChartData.length=0;

    this.fruitService.getFruitVoteCount()
      .subscribe(
        fruits => {
          this.fruitListings = fruits;

          for(let j =0;j< this.fruitListings.length;j++){
            this.doughnutChartLabels = this.doughnutChartLabels.concat(this.fruitListings[j][1]);
            this.lineChartLabels = this.lineChartLabels.concat(this.fruitListings[j][1]);
          }

          for(var i =0;i< this.fruitListings.length;i++){
            this.doughnutChartData[i] = this.fruitListings[i][2];
            this.lineChartData[i] = this.fruitListings[i][2];
          }
          // this.subscribeToData();

        },
        error => this.errorMessage = error

      );
  }

  // subscribeToData(): void {
  //    Observable.timer(5000).first().subscribe(() => this.fetchVotes());
  // }

  printList(){
    console.log("list"+this.fruitListings);
  }

  ngOnDestroy(){

  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
