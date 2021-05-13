import { Book } from './book';

export type Books = {
    kind: string;
    totalItems: number;
    items: Book[];
}