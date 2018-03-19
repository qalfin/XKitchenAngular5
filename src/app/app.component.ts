import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xsis Kitchen';
  peoples = [
    {id : 1, name: "Budi Gunawan", age: 18},
    {id : 2, name: "Mark", age: 12},
    {id : 3, name: "Gunawan", age: 8},
    {id : 4, name: "Bunawan", age: 31}
  ];
}
