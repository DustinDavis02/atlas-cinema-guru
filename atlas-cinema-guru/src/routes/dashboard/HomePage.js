import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  const loadMovies = useCallback((page) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      console.error("No access token found");
      return;
    }

    axios.get('http://localhost:8000/api/titles/advancedsearch', {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        minYear,
        maxYear,
        genres: genres.join(','),
        title,
        sort,
        page
      }
    })
    .then(response => {
      if (page === 1) {
        setMovies(response.data.titles);
      } else {
        setMovies(prevMovies => [...prevMovies, ...response.data.titles]);
      }
    })
    .catch(error => {
      console.error("Failed to fetch movies:", error);
    });
  }, [minYear, maxYear, genres, title, sort]);

  useEffect(() => {
    loadMovies(1);
  }, [loadMovies]);

  return (
    <div className="main-content">
      <div className="filter-container">
        <Filter
          minYear={minYear}
          setMinYear={setMinYear}
          maxYear={maxYear}
          setMaxYear={setMaxYear}
          sort={sort}
          setSort={setSort}
          genres={genres}
          setGenres={setGenres}
          title={title}
          setTitle={setTitle}
        />
      </div>
      <div className="movie-cards">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Button
        label="Load More.."
        onClick={() => {
          const nextPage = page + 1;
          setPage(nextPage);
          loadMovies(nextPage);
        }}
      />
    </div>
  );
};

export default HomePage;
