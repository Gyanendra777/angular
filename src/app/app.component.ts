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
  student:any[];
 
  
  constructor(){
    this.student=[
      {
        studentid:1,
        name:'raju',
        age:23,
        gender:"male",
        coarse:'m.com'
      },
      {
        studentid:2,
        name:'raju dubey',
        age:23,
        gender:"male",
        coarse:'m.com'
      },
      {
        studentid:3,
        name:'raju panday',
        age:23,
        gender:"male",
        coarse:'m.com'
      },
      {
        studentid:4,
        name:'raju shing',
        age:23,
        gender:"male",
        coarse:'m.com'
      },
    ]
  }
  getmorestudent():void{
    this.student= [
      {
        studentid:1,
        name:'raju',
        age:23,
        gender:"male",
        coarse:'m.com'
      },
      {
        studentid:2,
        name:'raju dubey',
        age:23,
        gender:"male",
        coarse:'m.com'
      },
      {
        studentid:3,
        name:'raju panday',
        age:23,
        gender:"male",
        coarse:'m.com'
      },
      {
        studentid:4,
        name:'raju shing',
        age:23,
        gender:"male",
        coarse:'m.com'
      },
      {
        studentid:5,
        name:'shikha',
        age:23,
        gender:"female",
        coarse:'m.com'
      },
    ]

  }
  trakbystudentbyid(index:number,student:any):string{
    return student.studentid
  }
  

  // @HostListener('click')
  // // onk(event:Event){
  // //   alert('hello hostlistener')
  // }
}
