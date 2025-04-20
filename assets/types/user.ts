export interface UserInterface {
    id: number;
    email?: string;
    username?: string;
    success: boolean;
    roles: string[];
    image?: string;
}