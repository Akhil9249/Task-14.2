import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const MovieContext = createContext()

const URL_F = "http://localhost:5000/";

export const MovieProvider = ({children})=>{
    const [searchResult, setSearchResult] = useState([]);
  
    const getMovie = async () => {
        const response = await axios(URL_F);
        const Result = response.data.filter((data, index) => index <= 7);
        setSearchResult(Result);
        console.log(Result);
    };
  
    useEffect(() => {
        getMovie();
    }, []);

    return <MovieContext.Provider value={{searchResult,getMovie}}>{children}</MovieContext.Provider>
}