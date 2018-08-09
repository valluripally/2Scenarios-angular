import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module6parentComponent } from './module6parent.component';

describe('Module6parentComponent', () => {
  let component: Module6parentComponent;
  let fixture: ComponentFixture<Module6parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module6parentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
