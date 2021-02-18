import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  em :any[]=[
    {code:"123",name:"mukesh panday",salary:1234,date:'12/2/100'},
    {code:"1",name:"muke paday",salary:124534,date:'1/2/1020'},
    {code:"13",name:"muesh anday",salary:1243534,date:'2/2/100'},
    {code:"123rty",name:"mesh pany",salary:1234534,date:'42/2/1020'},
    {code:"1223",name:"mesh nday",salary:12345534,date:'72/2/120'},
  ]
}
