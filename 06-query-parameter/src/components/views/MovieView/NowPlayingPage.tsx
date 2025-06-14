import React from 'react';
import MovieList from './MovieComponent/MovieList';
import { getNowPlayingMovies, type IMovies } from '../../../utils/Movie';

interface PropTypes {
	match: {
		params: {
			id: number;
		};
	};
}

class NowPlayingPage extends React.Component {
	constructor(props: PropTypes) {
		super(props);

		this.state = {
			nowPlayingMovies: getNowPlayingMovies(),
		};
	}

	state: {
		nowPlayingMovies: IMovies[];
	};

	render() {
		return (
			<section>
				<h2>Now Playing</h2>
				<MovieList movies={this.state.nowPlayingMovies} />
			</section>
		);
	}
}

export default NowPlayingPage;
