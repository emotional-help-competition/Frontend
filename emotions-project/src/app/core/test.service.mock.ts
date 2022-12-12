import { Observable, of } from "rxjs";
import { quizzMock } from "../mocks/quizz-mock";
import { recommendationsMock } from "../mocks/recommendations-mock";
import { resultMock } from "../mocks/result-mock";
import { questionsMock } from "../mocks/tests-mock";
import { ResultItem } from "../models/emotions";
import { IQuestion, IQuizz } from "../models/question";
import { IRecommendation } from "../models/recommendation";

export class TestServiceMock {


    getQuizzes(): Observable<IQuizz[]> {
        return of(quizzMock);
    }
    getQuizz(): Observable<IQuestion[]> {
        return of(questionsMock);
    }

    processTest(): Observable<number> {
        return of(5);
    }
    getResult():Observable<ResultItem[]>{
        return of(resultMock)
    }
    getRecommendations():Observable<IRecommendation[]>{
        return of(recommendationsMock)
    }

}