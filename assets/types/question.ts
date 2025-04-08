import {CategoriesInterface} from "./categories";
import {ChoicesInterface} from "./choices";
import {CommentInterface} from "./comment";

export interface QuestionInterface {
    id: number;
    content: string;
    difficulty: number;
    explanation: string;
    categories: CategoriesInterface[];
    choices: ChoicesInterface[];
    comments: CommentInterface[];
}

// export interface QuestionProps {
//     questionProps: QuestionInterface;
// }