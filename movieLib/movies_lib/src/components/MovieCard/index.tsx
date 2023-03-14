import {Link} from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { IMovies } from "../../interface";

const imageUrl = import.meta.env.VITE_IMG;

//movie vai ter as propriedades que preciso para utilizar aqui dentro

interface Props {
    movie: IMovies;
    showLink: boolean;
}

const index = ({movie, showLink = true}:Props) => {
  return (
    <div className="movie-card">
        <img src={imageUrl + movie.poster_path} alt={movie.title} /> 
        <h2>{movie.title}</h2>
        <p>
            <FaStar/> {movie.vote_average}
        </p> 
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default index;