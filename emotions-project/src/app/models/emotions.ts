export interface ResultItem {
    category: string;
    subCategories: SubCategory[];
  }
  
  export interface SubCategory {
    emotions: string[];
    score: number;
  }
  