import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetMarketingComponent } from './internet-marketing.component';

describe('InternetMarketingComponent', () => {
  let component: InternetMarketingComponent;
  let fixture: ComponentFixture<InternetMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternetMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
