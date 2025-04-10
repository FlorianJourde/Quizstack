import {UserInterface} from "./user";

export interface AuthContextInterface {
    currentUser: UserInterface | null;
    loading: boolean;
    error: string | null;
    isAuthor: (contentAuthorId: number) => boolean;
}