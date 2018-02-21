import {NgModule,OnInit} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CreateStudentComponent} from "./create-student/create-student.component";
import {FruitListingComponent} from "./fruit-listing/fruit-listing.component";
import {CheckStudentComponent} from "./check-student/check-student.component";


const AppRoutes:Routes = [
  {path:'',redirectTo:'/createStudent',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'createStudent',component:CreateStudentComponent},
  {path:'fruitlistings',component:FruitListingComponent},
  {path:'checkvote',component:CheckStudentComponent}
];

@NgModule({
  imports : [RouterModule.forRoot(AppRoutes)],
  exports : [RouterModule]
})
export class AppRoutingModule{
  ngOnInit(){

  }
}
