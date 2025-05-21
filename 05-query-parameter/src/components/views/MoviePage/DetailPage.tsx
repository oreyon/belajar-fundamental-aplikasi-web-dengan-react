import React from 'react';
import { getMovie, type IMovies } from '../../../utils/data';
import MovieDetail from './MovieComponent/MovieDetail';

interface PropTypes {
	match: {
		params: {
			id: number;
		};
	};
}

class DetailPage extends React.Component {
	constructor(props: PropTypes) {
		super(props);

		this.state = {
			movie: getMovie(props.match.params.id),
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

export default DetailPage;
