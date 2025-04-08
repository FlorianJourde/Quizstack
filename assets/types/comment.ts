
import {User} from "./user";

export interface CommentInterface {
    id: number;
    content: string;
    creationDate: Date;
    author: User;
}