import Container from 'react-bootstrap/Container';
import styles from '../styles/components/Header.module.css';

export function Header() {
    return (
       <header className={styles.layoutCabecalho}>
           <Container>
              <nav className={styles.navegacao}>
                  <div className={styles.navegacao__menu}>
                      <ul className={styles.menu}>
                        <div className={styles.menu__informacao}>
                            <li className={styles.menu__item}>
                                <a href="#">Sobre</a>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="#">Recursos</a>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="#">Ajuda</a>
                            </li>
                        </div>
                        <div className={styles.menu__usuario}>
                            <li className={styles.menu__item}>
                                <a href="#">LOGIN</a>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="#">CADASTRE-SE</a>
                            </li>
                        </div>
                    </ul>                      
                  </div>
              </nav>
           </Container>
       </header>
    );
}