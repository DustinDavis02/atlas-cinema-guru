import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';

const WatchLater = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.get('http://localhost:8000/api/titles/watchlater', {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error("Failed to fetch watch later movies:", error);
      });
    }
  }, []);

  return (
    <div className="watchlater-content">
      <h1>Movies to watch later</h1>
      <div className="movie-cards">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
