import React from 'react';

interface PropTypes {
	search: (keyword: string) => void;
	defaultKeyword?: string;
}

class SearchBar extends React.Component<PropTypes> {
	constructor(props: PropTypes) {
		super(props);

		this.state = {
			keyword: props.defaultKeyword || '',
		};

		this.onSubmitHandler = this.onSubmitHandler.bind(this);
		this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
	}

	state: {
		keyword: string;
	};

	onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		this.props.search(this.state.keyword);
	}

	onKeywordChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		this.setState(() => {
			return {
				keyword: value,
			};
		});
	}

	render() {
		return (
			<form onSubmit={this.onSubmitHandler}>
				<input
					type='text'
					placeholder='search movie by title'
					value={this.state.keyword}
					onChange={this.onKeywordChangeHandler}
				/>
				<button type='submit'>Search</button>
			</form>
		);
	}
}

export default SearchBar;
