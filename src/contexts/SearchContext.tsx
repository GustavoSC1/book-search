import { createContext, useState, ReactNode } from 'react';

interface SearchContextData {
    bookName: string;
    setName: (name : string) => void;
}

interface SearchProviderProps {
    children: ReactNode;
}

export const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children }: SearchProviderProps) {
    const [bookName, setBookName] = useState("");

    function setName(name : string){
        setBookName(name);
    }

    return (
        <SearchContext.Provider value={{bookName, setName}}>
            {children}
        </SearchContext.Provider>
    );
}