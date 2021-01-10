import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendUsComponent } from './recommend-us.component';

describe('RecommendUsComponent', () => {
  let component: RecommendUsComponent;
  let fixture: ComponentFixture<RecommendUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
