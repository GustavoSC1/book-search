import {Container, Row, Col} from 'react-bootstrap';
import styles from '../styles/pages/Home.module.css';
import Link from 'next/link';
import { SearchContext } from '../contexts/SearchContext';
import { useContext } from 'react';
import { FooterFixed } from '../components/FooterFixed';
import { useRouter } from 'next/router'

export default function Home() {
  const { setName } = useContext(SearchContext);
  const router = useRouter()

  const searchBook = event => {
    event.preventDefault() // não redirecione a página
    setName(event.target.buscar.value);
    router.push('/resultados');
  }
  return (
    <>
      <section className={styles.layoutChamada}>
        <Container>

          <div className={styles.chamada}>
            <h1 className={styles.chamada__titulo}>PROJETO</h1>
            <h2 className={styles.chamada__subtitulo}>BOOK SEARCH</h2>
                          
            <div className={styles.input}>
              <form onSubmit={searchBook}>
                <div className={styles.inputText}>
                  <input type="text" name="buscar" id="buscar" className={styles.inputPrincipal} placeholder="Buscar..."/>
                </div>
                <div className={styles.inputSubmit}>                  
                  <input type="submit" value="PROCURAR" className={styles.botaoPrincipal} />                  
                </div>
              </form>
            </div>
                      
          </div>
        </Container>
      </section>
      <FooterFixed />
    </>
  )
}
