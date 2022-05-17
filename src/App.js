import React, { useState, useEffect } from "react";
import MovieCard from "./moviee/moviecard";
import SearchIcon from "./moviee/moo.png";
import "./App.css";


//API_KEY=25fd43f2;
const API_URL_LINK = "http://www.omdbapi.com?apikey=25fd43f2";

const App = () => {
 
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL_LINK}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Batman");
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  return (
    <div className="movie-header">
      <h1>It's Movie Time</h1>

      <div className="header-input">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="no-field">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;