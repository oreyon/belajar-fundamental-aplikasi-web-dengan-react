import { Fragment } from 'react/jsx-runtime';
import NotesArchiveView from '../../components/views/NotesArchiveView';
import NotesSearchButton from '../../components/atoms/NotesSearchButton';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import type { Note } from '../../libs/api/note.service';

interface PropTypes {
	notes: Note[];
	deleteNote: (id: string) => void;
	toggleArchiveNote: (id: string) => void;
}

const NotesArchivePage = (props: PropTypes) => {
	const { notes, deleteNote, toggleArchiveNote } = props;

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
			<NotesArchiveView
				notes={filteredNotes}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</Fragment>
	);
};

NotesArchivePage.propTypes = {
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
	deleteNote: PropTypes.func.isRequired,
	toggleArchiveNote: PropTypes.func.isRequired,
};

export default NotesArchivePage;
