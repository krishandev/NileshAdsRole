import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicSeoServicesComponent } from './organic-seo-services.component';

describe('OrganicSeoServicesComponent', () => {
  let component: OrganicSeoServicesComponent;
  let fixture: ComponentFixture<OrganicSeoServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganicSeoServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganicSeoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
