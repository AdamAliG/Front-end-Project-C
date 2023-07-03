import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerylineComponent } from './galleryline.component';

describe('GallerylineComponent', () => {
  let component: GallerylineComponent;
  let fixture: ComponentFixture<GallerylineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallerylineComponent]
    });
    fixture = TestBed.createComponent(GallerylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
