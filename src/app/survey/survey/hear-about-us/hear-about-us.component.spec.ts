import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearAboutUsComponent } from './hear-about-us.component';

describe('HearAboutUsComponent', () => {
  let component: HearAboutUsComponent;
  let fixture: ComponentFixture<HearAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
