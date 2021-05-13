import { VolumeInfo } from './volumeInfo';

export type Book = {
    id: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
}