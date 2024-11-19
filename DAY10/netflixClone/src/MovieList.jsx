import "./MovieList.css";
import movies from "./movies";

const MovieList = () => {
  return (
    <div className="move-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.image} className="movie-image" />
          <h1>Title:{movie.title}</h1>
          <h2> {movie.language}</h2>
          <h2>const: {movie.cost}</h2>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
