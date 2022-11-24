import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressWebsiteComponent } from './wordpress-website.component';

describe('WordpressWebsiteComponent', () => {
  let component: WordpressWebsiteComponent;
  let fixture: ComponentFixture<WordpressWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordpressWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
