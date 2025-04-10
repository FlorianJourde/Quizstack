import {CategoriesInterface} from "./categories";
import {ChoicesInterface} from "./choices";
import {CommentInterface} from "./comment";
import {LimitReachedInterface} from "./limitReached";

export interface QuestionInterface {
    id: number;
    content: string;
    difficulty: number;
    explanation: string;
    categories: CategoriesInterface[];
    choices: ChoicesInterface[];
    comments: CommentInterface[];
    numberOfCorrectChoices : number;
}

// export interface LimitReachedInterface {
//     limitReached: true,
//     message?: string
// }

export type QuestionOrLimitReached = QuestionInterface | LimitReachedInterface;
