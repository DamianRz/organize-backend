import { OptionInterface } from "./Option";

export interface QuestionInterface {
  name: string;
  category: string;
  idType: number;
  options?: OptionInterface[];
}
