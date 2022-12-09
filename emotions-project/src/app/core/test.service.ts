import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultItem } from '../models/emotions';
import { IQuestion } from '../models/question';
import { QuestionnareRes } from '../models/questionnare-res';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  apiURL = environment?.apiURL || ''

  constructor(private http: HttpClient) { }

  getAll(): Observable<IQuestion[]> {
    return this.http.get<QuestionnareRes>(`${this.apiURL}/v1/quizzes/1`)
      .pipe(
        map(res => res.questions)
      )
  }

  processTest(questions: (Partial<IQuestion>[])): Observable<number> {
    return this.http.post<number>(`${this.apiURL}/v1/quizzes/1`, questions)
  };

  getResult(attemptId:number):Observable<ResultItem[]> {
    return this.http.get<ResultItem[]>(`${this.apiURL}/v1/results/${attemptId}`)
  }
}
