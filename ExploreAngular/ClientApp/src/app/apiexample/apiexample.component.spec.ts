import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiexampleComponent } from './apiexample.component';

describe('ApiexampleComponent', () => {
  let component: ApiexampleComponent;
  let fixture: ComponentFixture<ApiexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
