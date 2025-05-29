import { useState, type ChangeEvent, type KeyboardEvent } from 'react';

interface PropTypes {
	onSearchNote: (title: string) => void;
	defaultKeyword?: string;
}

const NotesSearchButton = (props: PropTypes) => {
	const { onSearchNote, defaultKeyword = '' } = props;
	const [searchNote, setSearchNote] = useState(defaultKeyword);

	const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchNote(event.target.value);
	};

	const handleSearch = () => {
		onSearchNote(searchNote);
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<div className='max-w-2xl w-4/5 mx-auto p-4 mt-3 flex justify-center items-center shadow rounded-2xl'>
			<input
				type='text'
				placeholder='Search notes...'
				value={searchNote}
				onChange={handleChangeSearch}
				onKeyDown={handleKeyDown}
				className='w-full navbar-search-input p-2 text-base border border-quaternary rounded-md mr-2 bg-tertiary'
			/>
			<button
				type={'button'}
				onClick={handleSearch}
				className='navbar-search-btn py-2 px-5 text-base text-white bg-primary rounded-md hover:bg-quaternary'>
				Search
			</button>
		</div>
	);
};

export default NotesSearchButton;
