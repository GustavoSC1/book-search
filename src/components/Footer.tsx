import Container from 'react-bootstrap/Container';
import styles from '../styles/components/Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.layoutRodape}>
            <Container>
                <p>&copy; Todos os direitos reservados.</p>
            </Container>
        </footer>
    );
}