export interface IEmotions {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    "6": number
}

export interface ResultItem {
    category: string;
    subCategories: SubCategory[];
  }
  
  export interface SubCategory {
    emotions: string[];
    score: number;
  }
  