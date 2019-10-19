import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newrecipe',
  templateUrl: './newrecipe.component.html',
  styleUrls: ['./newrecipe.component.css']
})
export class NewrecipeComponent implements OnInit {


  public array = [{
    'first': 'A Test Recipe',
    'second': 'This is simply a test',
    'src' : 'assets/img/image.jpg'
  },{
    'first': 'A Test Recipe',
    'second': 'This is simply a test',
    'src' : 'assets/img/image.jpg'
  }]

  constructor() { }

  ngOnInit() {
  }

}
