import React from 'react';
import { getMovie, type IMovies } from '../../../utils/Movie';
import MovieDetail from './MovieComponent/MovieDetail';
import { useParams } from 'react-router-dom';

const DetailPageWrapper = () => {
	const { movieId } = useParams();
	return <DetailPage movieId={Number(movieId)} />;
};

interface PropTypes {
	movieId: number;
}

class DetailPage extends React.Component<PropTypes> {
	constructor(props: PropTypes) {
		super(props);

		this.state = {
			movie: getMovie(props.movieId),
		};
	}

	state: {
		movie: IMovies | null;
	};

	render() {
		if (this.state.movie === null) {
			return <p>Movie is not found!</p>;
		}

		return (
			<section>
				<MovieDetail {...this.state.movie} />
			</section>
		);
	}
}

export default DetailPageWrapper;
