import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerSideComponent } from './worker-side.component';

describe('WorkerSideComponent', () => {
  let component: WorkerSideComponent;
  let fixture: ComponentFixture<WorkerSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerSideComponent]
    });
    fixture = TestBed.createComponent(WorkerSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
