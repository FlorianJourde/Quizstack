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
    correctChoices?: number[];
}

export type QuestionOrLimitReached = QuestionInterface | LimitReachedInterface;
