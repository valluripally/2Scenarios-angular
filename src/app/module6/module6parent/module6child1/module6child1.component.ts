import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-module6child1',
  templateUrl: './module6child1.component.html',
  styleUrls: ['./module6child1.component.css']
})

export class Module6child1Component implements OnInit {
  inputVal="hi there ";
  value:string;
  constructor() { }

usableCode()
{
this.value=this.inputVal+"we are done"
return this.value;
}

  ngOnInit() {
  }

}
