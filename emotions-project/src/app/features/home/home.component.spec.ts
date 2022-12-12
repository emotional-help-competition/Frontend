import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TestService } from 'src/app/core/test.service';
import { TestServiceMock } from 'src/app/core/test.service.mock';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeComponent } from './home.component';

describe('HomepageComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let testService: TestService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [SharedModule,
      RouterTestingModule
      ],
      providers: [
        {
          provide: TestService, useClass: TestServiceMock
        }        
      ]
    })
    .compileComponents();
    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
