import {UserInterface} from "../types/user";

export default function getDisplayName(author?: UserInterface | null): string {
    if (author?.username) return author.username;

    const email = author?.email ?? '';
    if (!email) return '';

    const [localPart] = email.split('@');

    if (!localPart) return email;

    const firstChar = localPart[0];
    const stars = '*'.repeat(localPart.length - 1);

    return firstChar + stars;
}