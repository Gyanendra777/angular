import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  constructor(){}
  Register(regForm:any){
    // debugger
    var fistname=regForm.controls["first name"].value
    
    console.log(regForm);
    console.log(fistname);
    // document.write(fistname)
  }
  // reset(regForm:any){
  //   var a = new regForm.reset();

  // }
  
   

  
}
