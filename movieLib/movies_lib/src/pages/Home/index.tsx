import {useState, useEffect} from 'react';
import { IMovies } from '../../interface';  

import "./index.css";

import MovieCard from "../../components/MovieCard";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const index = () => { 
  
  //estados dos meus filmes 
  const [topMovies, setTopMovies] = useState<IMovies[]>([]);

  //chamando via api

  const getTopRatedMovies = async(url: string) => {
      
    const res = await fetch(url)
    const data = await res.json();//transformando os dados em array de obj js

     setTopMovies(data.results); 
     
  }

  useEffect(() => {
     //executa a cada vez em que alguma dependencia desse array e modificada
     //executo esse cara só quando a pagina for carregada

     const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;//param de url

      getTopRatedMovies(topRatedUrl);
     
  }, [])
  
  return (
    <div className="container">
        <h2 className="title">Melhores filmes:</h2> 
        <div className="movies-container">
          {topMovies.length === 0 && <p>Carregando...</p>}
          {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} showLink={true}/>)}
        </div>
    </div>
  )
}

export default index;