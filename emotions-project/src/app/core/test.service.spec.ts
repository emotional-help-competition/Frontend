import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { quizzResMock } from '../mocks/quizz-mock';
import { recommendationsMock } from '../mocks/recommendations-mock';
import { resultMock } from '../mocks/result-mock';
import { attemptResMock, questionsMock, questionsResMock } from '../mocks/tests-mock';
import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new TestService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be truthy', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(quizzResMock));

    service.getQuizzes().subscribe({
        next: res => {
            expect(res).toBeTruthy();
            done();
        },
        error: done.fail
    });
    expect(httpClientSpy.get.calls.count()).toBe(1);
});

it('should be truthy', (done: DoneFn) => {
  httpClientSpy.get.and.returnValue(of(questionsResMock));
  const id = 5;
  service.getQuizz(id).subscribe({
      next: res => {
          expect(res).toBeTruthy();
          done();
      },
      error: done.fail
  });
  expect(httpClientSpy.get.calls.count()).toBe(1);
});

it('should be truthy', (done: DoneFn) => {
  httpClientSpy.post.and.returnValue(of(attemptResMock));
  const questions = questionsMock;
  const id = 5;
  service.processTest(questions, id).subscribe({
      next: res => {
          expect(res).toBeTruthy();
          done();
      },
      error: done.fail
  });
  expect(httpClientSpy.post.calls.count()).toBe(1);
});

it('should be truthy and return result', (done: DoneFn) => {
  httpClientSpy.get.and.returnValue(of(resultMock));
  const attempId = 5;
  service.getResult(attempId).subscribe({
      next: res => {
          expect(res).toBeTruthy();
          expect(res).toEqual(resultMock)
          done();
      },
      error: done.fail
  });
  expect(httpClientSpy.get.calls.count()).toBe(1);
});

it('should be truthy and return recommendations', (done: DoneFn) => {
  httpClientSpy.post.and.returnValue(of(recommendationsMock));
  const attempId = 5;
  service.getRecommendations(attempId).subscribe({
      next: res => {
          expect(res).toBeTruthy();
          expect(res).toEqual(recommendationsMock)
          done();
      },
      error: done.fail
  });
  expect(httpClientSpy.post.calls.count()).toBe(1);
});
});
