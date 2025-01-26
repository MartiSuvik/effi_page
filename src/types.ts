export interface Question {
  id: string;
  type: 'text' | 'email' | 'select' | 'multiline';
  question: string;
  placeholder?: string;
  options?: string[];
  validation?: (value: string) => string | null;
}

export interface FormState {
  [key: string]: string;
}