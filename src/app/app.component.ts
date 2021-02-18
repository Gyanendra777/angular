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
      'contry':'india',
      'pepole':[
        {
          'name':'raju'
        },
        {
          'name':'raju dubey'
        },
        {
          'name':'raju panday'
        },
      ]
    },
    {
      'contry':'uk',
      'pepole':[
        {
          'name':'mikle'
        },
        {
          'name':'ray'
        },
        {
          'name':'raay'
        },
      ]
    }
  ]
}
