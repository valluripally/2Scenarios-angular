import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module6child2Component } from './module6child2.component';

describe('Module6child2Component', () => {
  let component: Module6child2Component;
  let fixture: ComponentFixture<Module6child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module6child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module6child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
