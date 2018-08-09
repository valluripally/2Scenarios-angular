import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module5part1Component } from './module5part1.component';

describe('Module5part1Component', () => {
  let component: Module5part1Component;
  let fixture: ComponentFixture<Module5part1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module5part1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module5part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
