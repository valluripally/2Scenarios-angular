import { Component, OnInit,Input } from '@angular/core';
import { Module5part2Component } from '../module5part2.component';

@Component({
  selector: 'app-module5part3',
  templateUrl: './module5part3.component.html',
  styleUrls: ['./module5part3.component.css']
})
export class Module5part3Component implements OnInit {
 @Input ()child:string
  ngOnInit() {
  }

}
