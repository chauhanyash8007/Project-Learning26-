import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


export const OmdbSearch = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const searchMovie = async () => {
    if (!movieName) return alert("Enter movie name");

    //const res = await axios.get("https://www.omdbapi.com/?apikey=9d57be0b&s=Avatar")
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=f0f874a7&s=${movieName}`,
    );
    console.log(res); //axios object
    console.log(res.data); //api response..
    setMovies(res.data.Search || []);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>OMDB SEARCH</h1>

      {/*Input */}
      <input
        type="text"
        placeholder="Enter movie name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={searchMovie}>SEARCH</button>

      {/* 🔹 Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ height: "250px", width: "100%" }}
            />
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <p>ID: {movie.imdbID}</p>
            <Link to={`/movie/${movie.imdbID}`}>
              <button style={{ marginTop: "10px" }}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
