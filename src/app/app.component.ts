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
  public choose="";
  setvalue(dry:any){
    this.choose = dry.target.value
  }
  
  constructor(myservesService:MyservesService){
    console.log(myservesService)
  }
  

  // @HostListener('click')
  // // onk(event:Event){
  // //   alert('hello hostlistener')
  // }
}
