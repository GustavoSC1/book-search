import Container from 'react-bootstrap/Container';
import styles from '../styles/components/BookListEmpty.module.css';

export function BookListEmpty() {

    return (
        <Container>
            <div className={styles.listEmptyCabecalho}>
                <img src="lupa.svg" alt="Lupa" className={styles.listEmptyImg} />
            </div>
        </Container>
    )
}