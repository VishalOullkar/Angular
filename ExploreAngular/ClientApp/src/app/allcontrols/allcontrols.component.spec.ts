import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcontrolsComponent } from './allcontrols.component';

describe('AllcontrolsComponent', () => {
  let component: AllcontrolsComponent;
  let fixture: ComponentFixture<AllcontrolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcontrolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
