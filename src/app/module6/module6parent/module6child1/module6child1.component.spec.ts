import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module6child1Component } from './module6child1.component';

describe('Module6child1Component', () => {
  let component: Module6child1Component;
  let fixture: ComponentFixture<Module6child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module6child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module6child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
