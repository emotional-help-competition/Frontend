import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TestService } from 'src/app/core/test.service';

import { TestComponent } from './test.component';
import { TestServiceMock } from 'src/app/core/test.service.mock';
import { SharedModule } from 'src/app/shared/shared.module';
import { questionsMock, testResMock } from 'src/app/mocks/tests-mock';
import { By } from '@angular/platform-browser';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let testService: TestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        SharedModule
    ],
    providers: [
      {
        provide: TestService, useClass: TestServiceMock
      }
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    testService = TestBed.inject(TestService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
