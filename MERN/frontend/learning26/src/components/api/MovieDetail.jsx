import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  const getMovieDetail = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=f0f874a7&i=${id}`
    );
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDetail();
  }, [id]);

  if (!movie) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{movie.Title}</h1>

      <img src={movie.Poster} style={{ height: "350px" }} />

      <h3>Year: {movie.Year}</h3>
      <h3>Genre: {movie.Genre}</h3>
      <h3>Director: {movie.Director}</h3>
      <h3>Actors: {movie.Actors}</h3>
      <h3>IMDB Rating: {movie.imdbRating}</h3>

      <p>{movie.Plot}</p>

      <button
        style={{ marginTop: "20px" }}
        onClick={() => navigate(-1)}
      >
        ⬅ Back
      </button>
    </div>
  );
};
