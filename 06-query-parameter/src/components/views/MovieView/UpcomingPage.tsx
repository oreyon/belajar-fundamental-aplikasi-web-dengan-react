import React from 'react';
import { getUpcomingMovies, type IMovies } from '../../../utils/Movie';
import MovieList from './MovieComponent/MovieList';

interface PropTypes {
	match: {
		params: {
			id: number;
		};
	};
}

class UpcomingPage extends React.Component {
	constructor(props: PropTypes) {
		super(props);

		this.state = {
			upcomingMovies: getUpcomingMovies(),
		};
	}

	state: {
		upcomingMovies: IMovies[];
	};

	render() {
		return (
			<section>
				<h2>Upcoming Movies</h2>
				<MovieList movies={this.state.upcomingMovies} />
			</section>
		);
	}
}

export default UpcomingPage;
