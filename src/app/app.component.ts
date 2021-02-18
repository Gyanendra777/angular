import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  contrydetale:any[]=[
    {
      'contry':'Component to view',
      'pepole':[
        {
          'name':'Interpolation Binding'
        },
        {
          'name':'property Binding'
        },
        {
          'name':'style Binding'
        },
        {
          'name':'class Binding'
        },
        {
          'name':'attribute Binding'
        },
      ]
    },
    {
      'contry':'View to Component',
      'pepole':[
        {
          'name':'Event binding'
        }
       
      ]
    }
  ]
}
