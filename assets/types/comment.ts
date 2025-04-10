import {UserInterface} from "./user";

export interface CommentInterface {
    id: number;
    content: string;
    creationDate: Date;
    updateDate: Date;
    author: UserInterface;
}