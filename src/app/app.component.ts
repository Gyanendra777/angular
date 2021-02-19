import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  emply:any=[
    {'id':23,'name':'gyaendra dubey','salary':235346, 'gender':'male'},
    {'id':23,'name':'gyaendra dubey','salary':235346, 'gender':'male'},
    {'id':23,'name':'gyaendra dubey','salary':235346, 'gender':'male'},
    {'id':23,'name':'gyaendra dubey','salary':235346, 'gender':'female'},
  ]
}
