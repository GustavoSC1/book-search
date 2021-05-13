import Container from 'react-bootstrap/Container';
import styles from '../styles/components/Footer.module.css';

export function FooterFixed() {
    return (
        <footer className={styles.layoutRodapeFixed}>
            <Container>
                <p>&copy; Todos os direitos reservados.</p>
            </Container>
        </footer>
    );
}