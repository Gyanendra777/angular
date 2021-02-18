import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  users=[
'anuge',
'mouth',
'rakes',
'raju'
  ];

  getcssClass(flag:string){
    let cssClass;
    if (flag=="mode") {
      cssClass={
        'one':true,
        'two':true
          }
    } else {
      cssClass={
        'one':false,
        'two':true
      }
    }
  }




constructor(){}
}
