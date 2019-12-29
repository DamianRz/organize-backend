import { QuestionInterface } from "./Question";

export interface QuestionnaireInterface {
  idUser: number;
  name: string;
  category: string;
  idType: number;
  questions?: QuestionInterface[];
}
