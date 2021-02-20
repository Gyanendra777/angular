import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  constructor(private user:UserServiceService){
    // fist tip api call 
    this.user.getData().subscribe(data=>{
      console.warn(data)
    })

  }
  ngOnInit(){
    // secend tip api call 
    this.user.getData().subscribe(data=>{
      console.warn("resp",data)
    })

  }
}