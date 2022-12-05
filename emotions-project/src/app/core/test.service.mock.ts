import { Observable, of } from "rxjs";
import { resultMock } from "../mocks/result-mock";
import { testMock } from "../mocks/tests-mock";
import { IEmotions } from "../models/emotions";
import { IQuestion } from "../models/question";

export class TestServiceMock {
    emotionJoy = false;
    emotionFear = false;
    emotionSadness = false;
    emotionDisgust = false;
    emotionSurprise = true;
    emotionAnger = true;

    getAll():Observable<IQuestion[]>{
        return of(testMock);
    }

    
    postTest():Observable<IEmotions[]>{
        return of(resultMock);
    }

}