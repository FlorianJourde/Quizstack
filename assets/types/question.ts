import {CategoriesInterface} from "./categories";
import {AnswersInterface} from "./answers";

export interface QuestionInterface {
    id: number;
    content: string;
    difficulty: number;
    categories: CategoriesInterface[];
    // answers: Ans
    answers: AnswersInterface[];
}

// export interface QuestionProps {
//     questionProps: QuestionInterface;
// }