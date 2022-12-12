import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClipboardModule } from 'ngx-clipboard';
import { TestService } from 'src/app/core/test.service';
import { TestServiceMock } from 'src/app/core/test.service.mock';
import { resultMock } from 'src/app/mocks/result-mock';
import { SharedModule } from 'src/app/shared/shared.module';

import { ResultComponent } from './result.component';

describe('ResultpageComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let testService: TestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent],
      imports: [SharedModule,
        ClipboardModule,
        RouterTestingModule],
      providers: [
        {
          provide: TestService, useClass: TestServiceMock
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
