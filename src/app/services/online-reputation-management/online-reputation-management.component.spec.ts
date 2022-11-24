import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineReputationManagementComponent } from './online-reputation-management.component';

describe('OnlineReputationManagementComponent', () => {
  let component: OnlineReputationManagementComponent;
  let fixture: ComponentFixture<OnlineReputationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineReputationManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineReputationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
