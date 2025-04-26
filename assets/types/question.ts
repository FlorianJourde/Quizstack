import {CategoriesInterface} from "./categories";
import {ChoicesInterface} from "./choices";
import {CommentInterface} from "./comment";
import {LimitReachedInterface} from "./limitReached";

export interface QuestionInterface {
    id: number;
    categories: CategoriesInterface[];
    choices: ChoicesInterface[];
    comments: CommentInterface[];
    content: string;
    correctChoices?: number[];
    difficulty: number;
    explanation?: string;
    isMatch?: boolean;
    image?: string;
    numberOfCorrectChoices: number;
}

export type QuestionOrLimitReached = QuestionInterface | LimitReachedInterface;
