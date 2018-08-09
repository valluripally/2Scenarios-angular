import { Component, OnInit } from '@angular/core';
import { Module6child1Component } from '../module6child1/module6child1.component';

@Component({
  selector: 'app-module6child2',
  templateUrl: './module6child2.component.html',
  styleUrls: ['./module6child2.component.css']
})
export class Module6child2Component implements OnInit {
output;
  constructor(service:Module6child1Component) {
  this.output=service.usableCode();
   }
  ngOnInit() {
  }

}
