import { Book } from '../../types/book';
import { fetchBook, api } from '../../api/api';
import { Container } from 'react-bootstrap';
import styles from '../../styles/pages/Detalhes.module.css';
import { FooterFixed } from '../../components/FooterFixed';

type Props = {
    book: Book;
}

export default function BookDetail({ book }: Props) {
    console.log(book);
    return (
      <>
        <div>
            <Container>
                <div className={styles.detailContainer}>
                    <h1 className={styles.bookTitle}>{book.volumeInfo.title}</h1>
                    {book.volumeInfo.authors ? <h2 className={styles.bookAutor}>{book.volumeInfo.authors.map(author => (author+" "))}</h2> : <h2 className={styles.bookAutor}>Autor não informado</h2>}
                    <img src={book.volumeInfo.imageLinks?.smallThumbnail ?? "./no_book_cover.jpg"} className={styles.bookImage} alt="Capa do Livro"/>
                    {book.volumeInfo.description ? <p className={styles.bookDetail} dangerouslySetInnerHTML={{ __html:book.volumeInfo.description }}></p>: <p>Descrição não informada</p>}
                </div>
            </Container>          
        </div>
        <FooterFixed />
      </>
    )
}

export async function getServerSideProps(ctx) {    
    const { slug } = ctx.params;
    const { data } = await fetchBook(slug);
    
    return {
        props: {
            book: data
        }
    }
}



