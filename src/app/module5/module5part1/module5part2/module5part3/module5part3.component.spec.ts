import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module5part3Component } from './module5part3.component';

describe('Module5part3Component', () => {
  let component: Module5part3Component;
  let fixture: ComponentFixture<Module5part3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module5part3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module5part3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
