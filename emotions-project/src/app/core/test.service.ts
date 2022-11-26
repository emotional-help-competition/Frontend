import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITest } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getAll():Observable<ITest[]>{
    return this.http.get<ITest[]>('http://localhost:8080/getAll')
  }


  postTest(){

  };

  getResult(){

  }
}
