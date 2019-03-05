import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdetailsComponent } from './registerdetails.component';

describe('RegisterdetailsComponent', () => {
  let component: RegisterdetailsComponent;
  let fixture: ComponentFixture<RegisterdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
