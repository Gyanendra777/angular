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
  h=true;
 clickme() {
    alert('welcome to component')
  }
  constructor(myservesService:MyservesService){
    // var  c=myservesService.clickF()
    console.log(myservesService)
  }
  // clickme(...args: [: any] | [: any]);
  

  @HostListener('click')
  onk(event:Event){
    alert('hello hostlistener')
  }
}
