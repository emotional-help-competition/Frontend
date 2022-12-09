import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { recommendationsMock } from '../mocks/recommendations-mock';
import { Emotion } from '../models/emotion-enum';
import { IEmotions } from '../models/emotions';
import { IQuestion, IQuizz } from '../models/question';
import { QuestionnareRes } from '../models/questionnare-res';
import { QuizzRes } from '../models/quizz-res';
import { IRecommendation } from '../models/recommendation';



@Injectable({
  providedIn: 'root'
})
export class TestService {
  apiURL = environment?.apiURL || ''

  constructor(private http: HttpClient) { }

  getQuizzes():Observable<IQuizz[]> {
    return this.http.get<QuizzRes>(`${this.apiURL}/v1/quizzes`)
  }

  processTest(questions: (Partial<IQuestion>[])): Observable<number> {
    return this.http.post<number>(`${this.apiURL}/v1/quizzes/1`, questions)

  }

  getResult(attemptId:number):Observable<ResultItem[]> {
    return this.http.get<ResultItem[]>(`${this.apiURL}/v1/results/${attemptId}`)
  }

  getRecommendations(): Observable<IRecommendation[]>{
    return this.http.get<IRecommendation[]>(`${this.apiURL}/v1/appointments/attempt/1`)
  }
}
