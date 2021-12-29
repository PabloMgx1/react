import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
// import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  // let movies = [];

  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  
  useEffect(() => {
    get("/discover/movie").then(data => {
      setMovies(data.results);
    });
  }, []);
  return (
    < ul className={styles.moviesGrid} >
      {
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      }
    </ul >
  );
}
