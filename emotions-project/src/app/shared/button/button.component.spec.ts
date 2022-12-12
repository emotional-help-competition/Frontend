import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let button: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.title = 'test';
    component.classes = 'btn btn__primary';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title', ()=>{
    button = fixture.nativeElement.querySelector('button');   
    expect(button.textContent).toContain('test');
  });

  it('should display original classes', ()=>{
    button = fixture.nativeElement.querySelector('button');   
    expect(button.className).toContain('btn btn__primary');
  });

});
