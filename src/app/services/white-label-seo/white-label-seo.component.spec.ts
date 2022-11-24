import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteLabelSeoComponent } from './white-label-seo.component';

describe('WhiteLabelSeoComponent', () => {
  let component: WhiteLabelSeoComponent;
  let fixture: ComponentFixture<WhiteLabelSeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteLabelSeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteLabelSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
