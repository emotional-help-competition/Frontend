import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestService } from 'src/app/core/test.service';
import { TestServiceMock } from 'src/app/core/test.service.mock';

import { QuizzComponent } from './quizz.component';

describe('QuizzComponent', () => {
  let component: QuizzComponent;
  let fixture: ComponentFixture<QuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzComponent ],
      imports: [RouterTestingModule],
      providers:[
        {
          provide: TestService, useClass: TestServiceMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
