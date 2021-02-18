import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'angular';
  onclick(){
    console.log('hello word in anguler creat event binding')
  }
  ahow(){
    alert('hello event binding')
  }
}
