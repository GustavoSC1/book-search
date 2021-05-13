import styles from '../styles/components/BooksList.module.css';
import { ProductCard } from '../components/BookCard';
import { Book } from '../types/book';

type Props = {
    books: Book[];
}

export function BooksList({ books }: Props) {
    return (
        <div className={styles.booksListContainer}>
            <div className={styles.booksListItems}>
                {books.map(book => (                    
                    <ProductCard key={book.id} book={book}/>
                ))}
            </div>
        </div>
    );
}