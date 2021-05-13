import styles from '../styles/components/BookCard.module.css';
import { Book } from '../types/book';
import Link from 'next/link';

type Props = {
    book: Book;
}

export function ProductCard({ book }: Props) {
    return (
        <Link href={`/detalhes/${book.id}`}> 
            <div className={styles.bookCardContainer}>            
                <img src={book.volumeInfo.imageLinks?.smallThumbnail ?? "./no_book_cover.jpg"} className={styles.bookCardImage} alt={book.volumeInfo.title} />
                <h3 className={styles.bookCardTitle}>
                    {book.volumeInfo.title}
                </h3>                
                <div className={styles.bookCardAutor}>
                    <p>
                         {book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Autor não informado"}
                    </p>
                </div>
            </div>
        </Link>
    )
}