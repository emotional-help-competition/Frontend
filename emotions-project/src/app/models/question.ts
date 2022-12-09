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
    description: string;
    name: string;
    questions: IQuestion[]
}