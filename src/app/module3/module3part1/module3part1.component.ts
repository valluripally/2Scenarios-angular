import { Component, OnInit } from '@angular/core';
import { Module3Component } from '../module3.component';

@Component({
  selector: 'app-module3part1',
  templateUrl: './module3part1.component.html',
  styleUrls: ['./module3part1.component.css']
})
export class Module3part1Component implements OnInit {
parentValue1;
parentValue2;
  constructor(input:Module3Component) { 
   this.parentValue1=input.value;
   this.parentValue2=input.incomingVal;
   
  }
  getParentValue():any
  {
    return this.parentValue1;
  }
  getParentValue2():any
  {
    console.log(this.parentValue2);
    return this.parentValue2;
  }

  ngOnInit() {
  }

}
