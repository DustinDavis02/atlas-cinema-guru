import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import './movies.css';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.get('http://localhost:8000/api/titles/favorite', {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(response => {
        setIsFavorite(response.data.some(fav => fav.imdbId === movie.imdbId));
      });

      axios.get('http://localhost:8000/api/titles/watchlater', {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(response => {
        setIsWatchLater(response.data.some(watch => watch.imdbId === movie.imdbId));
      });
    }
  }, [movie.imdbId]);

  const handleClick = (type) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return;

    const url = `http://localhost:8000/api/titles/${type}/${movie.imdbId}`;
    const method = (type === 'favorite' ? isFavorite : isWatchLater) ? 'delete' : 'post';

    axios({ method, url, headers: { Authorization: `Bearer ${accessToken}` } })
      .then(() => {
        if (type === 'favorite') {
          setIsFavorite(!isFavorite);
        } else {
          setIsWatchLater(!isWatchLater);
        }
      });
  };

  return (
    <li className="movie-card">
      <FontAwesomeIcon
        icon={faHeart}
        className="icon"
        onClick={() => handleClick('favorite')}
        style={{ color: isFavorite ? 'red' : 'gray' }}
      />
      <FontAwesomeIcon
        icon={faClock}
        className="icon"
        onClick={() => handleClick('watchlater')}
        style={{ color: isWatchLater ? 'blue' : 'gray' }}
      />
      <h3>{movie.title}</h3>
      <p>{movie.synopsis}</p>
      <p>{movie.genres.join(', ')}</p>
    </li>
  );
};

export default MovieCard;