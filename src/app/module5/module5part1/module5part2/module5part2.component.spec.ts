import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module5part2Component } from './module5part2.component';

describe('Module5part2Component', () => {
  let component: Module5part2Component;
  let fixture: ComponentFixture<Module5part2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module5part2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module5part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
