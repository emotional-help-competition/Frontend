import { IQuizz } from "../models/question";
import { QuizzRes } from "../models/quizz-res";
import { questionsMock } from "./tests-mock";

export const quizzMock:IQuizz[] = [
    {
        id: 1,
        description: 'quizz',
        name: 'quizz1',
        questions: questionsMock
    }
];

export const quizzResMock:QuizzRes = {
    content: quizzMock
}