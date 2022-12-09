export interface IQuestion { 
    id: number;
    text: string;
    emotion: {
        id: number,
        description: string
    }
    value?: number;
}

export interface IQuizz {
    id: number;
    descritption: string;
    name: string;
    questions: IQuestion[]
}