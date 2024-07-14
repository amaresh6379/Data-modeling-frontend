import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageResponseComponent } from './image-response.component';

describe('ImageResponseComponent', () => {
  let component: ImageResponseComponent;
  let fixture: ComponentFixture<ImageResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageResponseComponent]
    });
    fixture = TestBed.createComponent(ImageResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
