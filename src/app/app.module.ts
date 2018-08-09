import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { Module3part1Component } from './module3/module3part1/module3part1.component';
import { Module3part2Component } from './module3/module3part1/module3part2/module3part2.component';
import { Module4part1Component } from './module4/module4part1/module4part1.component';
import { Module4part2Component } from './module4/module4part1/module4part2/module4part2.component';
import { Module5part1Component } from './module5/module5part1/module5part1.component';
import { Module5part2Component } from './module5/module5part1/module5part2/module5part2.component';
import { Module5part3Component } from './module5/module5part1/module5part2/module5part3/module5part3.component';



@NgModule({
  declarations: [
    AppComponent,
    Module1Component,
    Module2Component,
    Module3part1Component,
    Module3part2Component,
    Module4part1Component,
    Module4part2Component,
    Module5part1Component,
    Module5part2Component,
    Module5part3Component
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
