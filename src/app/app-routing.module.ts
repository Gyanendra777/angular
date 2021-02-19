import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';

const routes: Routes = [
  {path:'',redirectTo:'page1',pathMatch:'full'},
  {path:'page1' ,component : StudentComponent},
  {path:'page2' ,component : StudentdetailComponent},
  {path:'**' ,component : PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
