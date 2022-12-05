export interface IQuestion { 
    id: number;
    text: string;
    emotion: {
        id: number,
        description: string
    }
    value?: number;
}