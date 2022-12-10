import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultItem } from '../models/emotions';
import { IQuestion, IQuizz } from '../models/question';
import { AttemptRes, QuestionnareRes } from '../models/questionnare-res';
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
    .pipe(
      map(res=>res.content)
    )
  }

  getQuizz(id:number):Observable<IQuestion[]> {
    return this.http.get<QuestionnareRes>(`${this.apiURL}/v1/quizzes/${id}`)
    .pipe(
      map(res=>res.questions)
    )
  }

  processTest(questions: (Partial<IQuestion>[]), id:number): Observable<number> {
    return this.http.post<AttemptRes>(`${this.apiURL}/v1/quizzes/${id}`, questions)
    .pipe(
      map(res=>res.attemptId)
    )

  }

  getResult(attemptId:number):Observable<ResultItem[]> {
    return this.http.get<ResultItem[]>(`${this.apiURL}/v1/results/${attemptId}`)
  }

  getRecommendations(attemptId:number): Observable<IRecommendation[]>{
    let body = new HttpParams();
    body = body.set('attemptId', attemptId);
    return this.http.post<IRecommendation[]>(`${this.apiURL}/v1/recommendations`, body)
  }
}
