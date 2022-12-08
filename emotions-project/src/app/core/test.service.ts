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
// 
  apiURL = environment?.apiURL || ''

  constructor(private http: HttpClient) { }

  getAll(): Observable<IQuestion[]> {
    return this.http.get<QuestionnareRes>(`${this.apiURL}/v1/quizzes/1`)
      .pipe(
        map(res => res.questions)
      )
  }

  postTest(questions: (Partial<IQuestion>[])): Observable<IEmotions> {

    return this.http.post<IEmotions>(`${this.apiURL}/v1/quizzes/1`, questions)
      .pipe(
        tap((res: IEmotions) => {
          this.emotionJoy = (res[Emotion.joy] >= 4);
          this.emotionFear = (res[Emotion.fear] >= 4);
          this.emotionSadness = (res[Emotion.sadness] >= 4);
          this.emotionDisgust = (res[Emotion.disgust] >= 4);
          this.emotionSurprise = (res[Emotion.surprise] >= 4);
          this.emotionAnger = (res[Emotion.anger] >= 4);
        })
      )
  };


  getResult(attemptId:number):Observable<ResultItem[]> {
    return this.http.get<ResultItem[]>(`${this.apiURL}/v1/results/${attemptId}`)
  }
}
