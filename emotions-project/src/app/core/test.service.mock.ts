import { Observable, of } from "rxjs";
import { resultMock } from "../mocks/result-mock";
import { testMock } from "../mocks/tests-mock";
import { ITest } from "../models/test";

export class TestServiceMock {
    getAll():Observable<ITest[]>{
        return of(testMock);
    }

    postTest(){
      return 'ok'
    }

    getResult(){
      return of(resultMock);
    }
}
