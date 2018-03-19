import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories = [
  {id:1 , initial: 'main', name: 'Main Course'},
  {id:2 , initial: 'soft', name: 'Soft Drinks'},
  {id:3 , initial: 'desert', name: 'Desert'}
  
]
  constructor() { }

  ngOnInit() {
  }

}
