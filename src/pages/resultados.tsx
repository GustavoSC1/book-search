import { useEffect, useState, useContext } from 'react';
import { Pesquisa } from '../components/Pesquisa';
import { BooksList } from '../components/BooksList';
import { BookListEmpty } from '../components/BookListEmpty';
import { Product } from '../types/types';
import { Books } from '../types/books';
import { fetchBooks } from '../api/api';
import { SearchContext } from '../contexts/SearchContext';
import { Footer } from '../components/Footer';

export default function Resultados() {
    const [products, setProducts] = useState<Product[]>([]);
    const [books, setBooks] = useState<Books>({kind: "",
        totalItems: -1,
        items: []});
    const { bookName } = useContext(SearchContext);

    
    useEffect(() => {
        var livro = bookName.trim();
        livro = livro.replace(/ /g, "-");
        if(livro != ""){
            fetchBooks(livro)
                .then(response => setBooks(response.data))
                .catch(error => console.log(error))      
        }
    }, [bookName]);
    
    return (
        <>
            <Pesquisa />
            {books.totalItems == -1 ? 
                <BookListEmpty />                               
            : <BooksList books={books.items}/> }    
            <Footer />        
        </>
    );
}