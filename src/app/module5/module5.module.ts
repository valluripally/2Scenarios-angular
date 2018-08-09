import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module5part1Component } from './module5part1/module5part1.component';
import { Module5part2Component } from './module5part1/module5part2/module5part2.component';
import { Module5part3Component } from './module5part1/module5part2/module5part3/module5part3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [Module5part1Component, Module5part2Component, Module5part3Component]
 
})
export class Module5Module { }
