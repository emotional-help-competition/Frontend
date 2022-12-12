import { ComponentFixture, TestBed } from '@angular/core/testing';
import { recommendationsMock } from 'src/app/mocks/recommendations-mock';

import { RecommendationComponent } from './recommendation.component';

describe('RecommendationComponent', () => {
  let component: RecommendationComponent;
  let fixture: ComponentFixture<RecommendationComponent>;
  let p: HTMLElement;
  let div: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationComponent ], 
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationComponent);
    component = fixture.componentInstance;
    component.recommendation = recommendationsMock[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original content', () => {
    p = fixture.nativeElement.querySelector('.container__type');
    expect(p.textContent).toContain('Number 1');
  });

  it('should display original description', () => {
    div = fixture.nativeElement.querySelector('.container__description');
    expect(div.textContent).toContain('Lorem ipsum dolor sit, amet');
  });
});
