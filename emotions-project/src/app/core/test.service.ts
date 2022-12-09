import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Emotion } from '../models/emotion-enum';
import { IEmotions, ResultItem } from '../models/emotions';
import { IQuestion } from '../models/question';
import { QuestionnareRes } from '../models/questionnare-res';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  emotionJoy = false;
  emotionFear = false;
  emotionSadness = false;
  emotionDisgust = false;
  emotionSurprise = false;
  emotionAnger = false;

  apiURL = environment?.apiURL || ''
  attemptId!: number;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IQuestion[]> {
    return this.http.get<QuestionnareRes>(`${this.apiURL}/v1/quizzes/1`)
      .pipe(
        map(res => res.questions)
      )
  }

  postTest(questions: (Partial<IQuestion>[])): Observable<number> {

    return this.http.post<number>(`${this.apiURL}/v1/quizzes/1`, questions)
    .pipe(
      tap(res=> this.attemptId = res)
    )
  };

  get attempt() {
    return this.attemptId
  }

  getResult(attemptId:number):Observable<ResultItem[]> {
    return this.http.get<ResultItem[]>(`${this.apiURL}/v1/results/${this.attemptId}`)
  }
}
