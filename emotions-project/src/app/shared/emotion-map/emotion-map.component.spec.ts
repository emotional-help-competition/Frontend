import { ComponentFixture, TestBed } from '@angular/core/testing';
import { resultMock } from 'src/app/mocks/result-mock';

import { EmotionMapComponent } from './emotion-map.component';

describe('EmotionMapComponent', () => {
  let component: EmotionMapComponent;
  let fixture: ComponentFixture<EmotionMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmotionMapComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmotionMapComponent);
    
    component = fixture.componentInstance;
    component.result = resultMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
