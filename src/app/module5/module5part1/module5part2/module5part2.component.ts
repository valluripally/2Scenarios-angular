import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-module5part2',
  templateUrl: './module5part2.component.html',
  styleUrls: ['./module5part2.component.css']
})
export class Module5part2Component implements OnInit {
  @Input() grandchild:string
  
  constructor() { }

  ngOnInit() {
  }

}
