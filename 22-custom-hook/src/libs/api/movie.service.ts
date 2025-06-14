    // {
    //   "adult": false,
    //   "backdrop_path": "/a3F9cXjRH488qcOqFmFZwqawBMU.jpg",
    //   "genre_ids": [
    //     16,
    //     28,
    //     878
    //   ],
    //   "id": 1376434,
    //   "original_language": "en",
    //   "original_title": "Predator: Killer of Killers",
    //   "overview": "While three of the fiercest warriors in human history—a Viking raider, a ninja in feudal Japan, and a WWII pilot—are killers in their own right, they are merely prey for their new opponent: the ultimate killer of killers.",
    //   "popularity": 684.3914,
    //   "poster_path": "/lbimIPTVsSlnmqSW5ngEsUxtHLM.jpg",
    //   "release_date": "2025-06-05",
    //   "title": "Predator: Killer of Killers",
    //   "video": false,
    //   "vote_average": 7.989,
    //   "vote_count": 423
    // },


export interface MovieApiResponse {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  popularity: number;
  genre_ids: number[];
  video: boolean;
}

export interface MovieResponse {
  id: number;
  title: string;
  overview: string;
  poster: string;
}



export const getMovies = async (): Promise<MovieResponse[]> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=0de37458c6ffde6aa6a16af814be4efa`
  );

  const { results } = await response.json();

  return results.map((movie: MovieApiResponse) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  }));
};