import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public name;
  public amount;

  public array = [];

  constructor() { }

  ngOnInit() {
  }

  addButton(){
    this.array.push({
      'name':this.name,
      'amount':this.amount
    })
  }


  clearButton(){
    this.name = "";
    this.amount="";
  }

}
