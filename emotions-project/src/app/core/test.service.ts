import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmotions } from '../models/emotions';
import { IQuestion } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  emotionJoy = true;
  emotionFear = true;
  emotionSadness = true;
  emotionDisgust = true;
  emotionSurprise = true;
  emotionAnger = true;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>('http://localhost:8080/getAll')
  }


  postTest(questions: (Partial<IQuestion>[])): Observable<IEmotions> {
    return this.http.post<IEmotions>('http://localhost:8080/results', questions)
  };


  getResult() {

  }
}
