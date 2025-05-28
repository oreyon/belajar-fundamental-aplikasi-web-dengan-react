import React from 'react';
import MovieList from './MovieComponent/MovieList';
import SearchBar from './MovieComponent/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { searchMovies, type IMovies } from '../../../utils/Movie';

const SearchPageWrapper = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const title = searchParams.get('title') || '';

	const handleSearchParams = (queryParameter: string) => {
		setSearchParams({ title: queryParameter });
	};

	return (
		<SearchPage onSearch={handleSearchParams} activeKeyword={`${title}`} />
	);
};

interface PropTypes {
	onSearch: (keyword: string) => void;
	activeKeyword?: string;
}

class SearchPage extends React.Component<PropTypes> {
	constructor(props: PropTypes) {
		super(props);

		this.state = {
			foundMovies: props.activeKeyword ? searchMovies(props.activeKeyword) : [],
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
				<SearchBar
					search={this.onSearch}
					defaultKeyword={this.props.activeKeyword}
				/>
				<MovieList movies={this.state.foundMovies} />
			</section>
		);
	}
}

export default SearchPageWrapper;
