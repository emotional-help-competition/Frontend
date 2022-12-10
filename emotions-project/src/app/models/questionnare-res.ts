import { IQuestion } from '../models/question';

export interface QuestionnareRes {
    questions: IQuestion[],
}

export interface AttemptRes {
    attemptId : number
}