import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDashComponent } from './dynamic-dash.component';

describe('DynamicDashComponent', () => {
  let component: DynamicDashComponent;
  let fixture: ComponentFixture<DynamicDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
