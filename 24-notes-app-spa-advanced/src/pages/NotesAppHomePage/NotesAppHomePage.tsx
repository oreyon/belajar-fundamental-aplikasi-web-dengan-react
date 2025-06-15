import { Fragment } from 'react/jsx-runtime';
import NotesSearchButton from '../../components/atoms/NotesSearchButton';
import NotesHomeView from '../../components/views/NotesHomeView';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import type { Note } from '../../libs/api/note.service';

interface PropTypes {
	notes: Note[];
	addNote: (title: string, body: string) => void;
	deleteNote: (id: string) => void;
	toggleArchiveNote: (id: string) => void;
}

const NotesAppHomePage = (props: PropTypes) => {
	const { notes, addNote, deleteNote, toggleArchiveNote } = props;

	const [searchParams, setSearchParams] = useSearchParams();
	const queryParams = searchParams.get('title') || '';

	const filteredNotes = queryParams
		? notes.filter((note: Note) =>
				note.title.toLowerCase().includes(queryParams.toLowerCase())
		  )
		: notes;

	const handleSearch = (keyword: string) => {
		if (keyword.trim()) {
			setSearchParams({ title: keyword });
		} else {
			setSearchParams({});
		}
	};

	return (
		<Fragment>
			<NotesSearchButton
				onSearchNote={handleSearch}
				defaultKeyword={queryParams}
			/>
			<NotesHomeView
				notes={filteredNotes}
				addNote={addNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</Fragment>
	);
};

NotesAppHomePage.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired,
			archived: PropTypes.bool.isRequired,
			owner: PropTypes.string.isRequired,
		})
	).isRequired,
	addNote: PropTypes.func.isRequired,
	deleteNote: PropTypes.func.isRequired,
	toggleArchiveNote: PropTypes.func.isRequired,
};

export default NotesAppHomePage;
