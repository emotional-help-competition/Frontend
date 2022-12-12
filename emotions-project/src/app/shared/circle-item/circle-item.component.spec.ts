import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleItemComponent } from './circle-item.component';

describe('CircleItemComponent', () => {
  let component: CircleItemComponent;
  let fixture: ComponentFixture<CircleItemComponent>;
  let p: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleItemComponent);
    component = fixture.componentInstance;
    component.content = 'test'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original content', () => {
    p = fixture.nativeElement.querySelector('.container__text');
    expect(p.textContent).toContain('test');
  });
});
