import { Observable, of } from "rxjs";
import { testMock } from "../mocks/tests-mock";
import { ITest } from "../models/test";

export class TestServiceMock {
    getAll():Observable<ITest[]>{
        return of(testMock);
    }
}