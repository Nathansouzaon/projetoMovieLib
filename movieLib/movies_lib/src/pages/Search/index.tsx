import { useState, useEffect} from "react";

//permite pegar a query string da url e utiliza-la
import { useSearchParams } from "react-router-dom";

//exibi os dados do filme individualmente
import MovieCard from "../../components/MovieCard";
import { IMovies } from "../../interface";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./index.css";

const index = () => { 
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState<IMovies[]>([])
  const query = searchParams.get("q");

    //chamando via api

    const getSearchedMovies = async(url: string) => {
      
      const res = await fetch(url)
      const data = await res.json();//transformando os dados em array de obj js
  
       setMovies(data.results); 
       
    }
  
    useEffect(() => {
       //executa a cada vez em que alguma dependencia desse array e modificada
       //executo esse cara só quando a pagina for carregada
  
       const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;//param de url
  
       getSearchedMovies(searchWithQueryURL);
       
    }, [query])

  return (
    <div className="container">
    <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2> 
    <div className="movies-container">
      {movies.length === 0 && <p>Carregando...</p>}
      {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} showLink={true}/>)}
    </div>
    </div>
  )
}

export default index;