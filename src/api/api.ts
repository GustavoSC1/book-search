import axios from "axios";

const API_URL = 'https://www.googleapis.com/books/v1';

const API_KEY = "AIzaSyA75O0rJPfEgWUyyAsAjLVrSytWKwMG36U";

const API_URL2 = 'https://dsdeliver-gustavo.herokuapp.com';

export function fetchProducts() {
    return axios(`${API_URL2}/products`)
}

export function fetchBooks(bookName : string) {
    return axios(`${API_URL}/volumes?q=${bookName}&orderBy=relevance&printType=books&maxResults=15&key=${API_KEY}`)
}

export function fetchBook(bookId : string) {
    return axios(`${API_URL}/volumes/${bookId}`)
}

export const api = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1'
})