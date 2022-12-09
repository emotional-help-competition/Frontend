import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { recommendationsMock } from '../mocks/recommendations-mock';
import { Emotion } from '../models/emotion-enum';
import { IEmotions } from '../models/emotions';
import { IQuestion } from '../models/question';
import { QuestionnareRes } from '../models/questionnare-res';
import { IRecommendation } from '../models/recommendation';


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

  constructor(private http: HttpClient) { }

  getAll(): Observable<IQuestion[]> {
    return this.http.get<QuestionnareRes>(`${this.apiURL}/v1/questions`)
      .pipe(
        map(res => res.content)
      )
  }

  postTest(questions: (Partial<IQuestion>[])): Observable<IEmotions> {

    return this.http.post<IEmotions>(`${this.apiURL}/v1/results`, questions)
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


  getResult() {

  }

  getRecommendations(): Observable<IRecommendation[]>{
    return this.http.get<IRecommendation[]>(`${this.apiURL}/v1/appointments/attempt/1`)
  }
}
