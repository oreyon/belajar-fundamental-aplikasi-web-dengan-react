import { useEffect, useState } from "react";
import { getMovies, type MovieResponse } from "../libs/api/movie.service";

const useGetMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MovieResponse[] | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        if (isMounted) {
          setMovies(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchMovies();

    return () => {
      isMounted = false;
      setMovies(null);
      setLoading(true);
    };
  }, []);

  return { loading, movies };
};

export default useGetMovies;