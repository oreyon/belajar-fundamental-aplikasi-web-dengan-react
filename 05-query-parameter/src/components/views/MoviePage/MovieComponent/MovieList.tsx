import type { IMovies } from '../../../../utils/data';
import MovieItem from './MovieItem';

interface PropTypes {
	movies: IMovies[];
}

function MovieList(props: PropTypes) {
	const { movies } = props;
	if (!movies.length) {
		return <p>No movie found</p>;
	}

	return (
		<div>
			{movies.map((movie: IMovies) => (
				<MovieItem key={movie.id} {...movie} />
			))}
		</div>
	);
}

export default MovieList;
