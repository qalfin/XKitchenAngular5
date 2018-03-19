import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users : [
  {id:1, user: 'Andi' , password:'pass01'},
  {id:2, user: 'Wawan' , password:'pass02'},
  {id:3, user: 'Bayu' , password:'pass03'},
  {id:4, user: 'Angin' , password:'pass04'}
  
]
  constructor() { }

  ngOnInit() {
  }

}
