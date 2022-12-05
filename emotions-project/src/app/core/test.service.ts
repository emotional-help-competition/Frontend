import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEmotions } from '../models/emotions';
import { IQuestion } from '../models/question';
import { QuestionnareRes } from '../models/questionnare-res';
import { ITest } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IQuestion[]> {
    return this.http.get<QuestionnareRes>('/v1/questions')
      .pipe(
        map(res => res.content)
      )
  }

  postTest(questions: (Partial<IQuestion>[])): Observable<IEmotions> {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type'
        }
      )
    };
    return this.http.post<IEmotions>('/v1/results', questions, httpOptions)};


  getResult(){

  }
}
