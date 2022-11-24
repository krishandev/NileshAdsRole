import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoForSmallBusinessesComponent } from './seo-for-small-businesses.component';

describe('SeoForSmallBusinessesComponent', () => {
  let component: SeoForSmallBusinessesComponent;
  let fixture: ComponentFixture<SeoForSmallBusinessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeoForSmallBusinessesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoForSmallBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
