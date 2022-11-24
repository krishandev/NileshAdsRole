import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPerClickManagementPpcComponent } from './pay-per-click-management-ppc.component';

describe('PayPerClickManagementPpcComponent', () => {
  let component: PayPerClickManagementPpcComponent;
  let fixture: ComponentFixture<PayPerClickManagementPpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPerClickManagementPpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayPerClickManagementPpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
