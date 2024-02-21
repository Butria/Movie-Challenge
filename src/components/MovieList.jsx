import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/api';
import apiConfig from '../services/apiConfig';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Lista de Películas</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={apiConfig.w500Image(movie.poster_path)} alt={movie.title} />
            <p>{movie.title}</p>
            <p>Año de lanzamiento: {movie.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;