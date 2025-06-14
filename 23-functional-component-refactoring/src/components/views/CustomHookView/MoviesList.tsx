import useGetMovies from "../../../hooks/useGetMovies";
import type { MovieResponse } from "../../../libs/api/movie.service";

const MoviesList = () => {
  const {
    loading,
    movies
  } = useGetMovies();


  if (loading) {
    return (
      <div className="movies-list">
        <p>Loading ....</p>
      </div>
    );
  }

    if (!movies || movies.length === 0) {
    return (
      <div className="movies-list">
        <p>No movies found.</p>
      </div>
    );
  }


  return (
    <ul className="movies-list">
      {movies.map((movie:MovieResponse) => {
        return (
          <li key={movie.id} className="movies-list-item">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </li>
        );
      })}
    </ul>
  );
}
export default MoviesList