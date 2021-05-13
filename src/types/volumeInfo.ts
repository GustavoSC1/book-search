import { ImageLinks } from './imageLinks';

export type VolumeInfo = {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    categories: string[];
    imageLinks: ImageLinks;
    language: string;
}