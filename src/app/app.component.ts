import { Component, HostListener } from '@angular/core';
import { MyservesService } from './myserves.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:true
})
export class AppComponent {
  title = 'angular';
  student : any[]=[
    {'name':'raju'},
    {'name':'raju dubey'},
    {'name':'raju panday'},
    {'name':'raju tivari'},
    {'name':'raju miscra'},
    {'name':'raju upadya'},
    {'name':'raju shing'},
  ]
 
  
  constructor(myservesService:MyservesService){
    console.log(myservesService)
  }
  

  // @HostListener('click')
  // // onk(event:Event){
  // //   alert('hello hostlistener')
  // }
}
