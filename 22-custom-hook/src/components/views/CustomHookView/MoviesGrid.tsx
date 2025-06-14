import { type MovieResponse} from "../../../libs/api/movie.service";
import useGetMovies from "../../../hooks/useGetMovies";


const MoviesGrid = () => {
  const { loading, movies } = useGetMovies();

  if (loading) {
    return (
      <div className="movies-grid">
        <p>Loading ....</p>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="movies-grid">
        <p>No movies found.</p>
      </div>
    );
  }

  return (
    <div className="movies-grid">
      {movies.map((movie:MovieResponse) => {
        return (
          <div key={movie.id} className="movies-grid-item">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-grid-item--info">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default MoviesGrid