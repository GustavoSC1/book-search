import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { SearchContext } from '../contexts/SearchContext';
import styles from '../styles/components/Pesquisa.module.css';

export function Pesquisa() {
    const { bookName, setName } = useContext(SearchContext);
    
    const searchBook = event => {
        event.preventDefault() // não redirecione a página
        setName(event.target.buscar.value);
    }
    
    return (
        <div className={styles.layoutPesquisa}>
            <Container>
                <p className={styles.home}>BUSCAR</p> 
                <div className={styles.input}>
                    <form onSubmit={searchBook}>               
                        <div className={styles.inputText}>
                            <input type="text" name="buscar" id="buscar" className={styles.inputPrincipal} placeholder="Buscar..."/>
                        </div>                
                        <div className={styles.inputSubmit}>
                            <button className={styles.inputButton}>
                                <img src="/lupa.svg" />
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
}