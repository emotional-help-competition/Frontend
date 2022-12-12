import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let div: HTMLElement;
  let img: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.color = 'white';
    component.content = 'test content';
    component.title = 'test title';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title', () => {
    div = fixture.nativeElement.querySelector('.container__header');
    expect(div.textContent).toContain('test title');
  });

  it('should display original content', () => {
    div = fixture.nativeElement.querySelector('.container__text');
    expect(div.textContent).toContain('test content');
  });

  it('should have original class', () => {
    div = fixture.nativeElement.querySelector('.container__text');
    expect(div.className).toContain('white');
  });
});
