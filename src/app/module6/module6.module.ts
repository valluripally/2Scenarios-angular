import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module6parentComponent } from './module6parent/module6parent.component';
import { Module6child1Component } from './module6parent/module6child1/module6child1.component';
import { Module6child2Component } from './module6parent/module6child2/module6child2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Module6parentComponent, Module6child1Component, Module6child2Component]
  
})
export class Module6Module { }
