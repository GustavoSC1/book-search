import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.css';

import { SearchProvider } from '../contexts/SearchContext';

import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {  
  return (
    <>
      <SearchProvider>
        <Header />
        <Component {...pageProps} />        
      </SearchProvider>
    </>
  );
}

export default MyApp
