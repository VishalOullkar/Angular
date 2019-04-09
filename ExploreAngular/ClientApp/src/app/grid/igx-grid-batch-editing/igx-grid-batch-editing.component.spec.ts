import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgxGridBatchEditingComponent } from './igx-grid-batch-editing.component';

describe('IgxGridBatchEditingComponent', () => {
  let component: IgxGridBatchEditingComponent;
  let fixture: ComponentFixture<IgxGridBatchEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgxGridBatchEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgxGridBatchEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
