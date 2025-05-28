import React from 'react';
import { searchMovies, type IMovies } from '../../../utils/data';
import MovieList from './MovieComponent/MovieList';
import SearchBar from './MovieComponent/SearchBar';

interface PropTypes {
	onSearch: (keyword: string) => void;
	activeKeyword?: string;
}

class SearchPage extends React.Component<PropTypes> {
	constructor(props: PropTypes) {
		super(props);

		this.state = {
			foundMovies: [],
		};

		this.onSearch = this.onSearch.bind(this);
	}

	state: {
		foundMovies: IMovies[];
	};

	onSearch(keyword: string) {
		this.setState(() => ({
			foundMovies: searchMovies(keyword),
		}));

		this.props.onSearch(keyword);
	}

	render() {
		return (
			<section>
				<h2>Search Movie</h2>
				<SearchBar search={this.onSearch} />
				<MovieList movies={this.state.foundMovies} />
			</section>
		);
	}
}

export default SearchPage;
