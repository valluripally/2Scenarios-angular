import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module3',
  templateUrl: './module3.component.html',
  styleUrls: ['./module3.component.css']
})
export class Module3Component implements OnInit {
  value="abcd";
 incomingVal;
  constructor() { }
  onClick(_name)
  {
    this.incomingVal=_name;
  
  }
  ngOnInit() {
  }

}
