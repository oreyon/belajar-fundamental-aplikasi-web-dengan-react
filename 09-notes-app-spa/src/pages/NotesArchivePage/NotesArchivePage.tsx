import { Fragment } from 'react/jsx-runtime';
import type { Note } from '../../utils/data';
import NotesArchiveView from '../../components/views/NotesArchiveView';
import NotesSearchButton from '../../components/atoms/NotesSearchButton';
import { useSearchParams } from 'react-router-dom';

interface PropTypes {
	notes: Note[];
	editNote: (id: number, title: string, body: string) => void;
	deleteNote: (id: number) => void;
	toggleArchiveNote: (id: number) => void;
}

const NotesArchivePage = (props: PropTypes) => {
	const { notes, editNote, deleteNote, toggleArchiveNote } = props;

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
				editNote={editNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</Fragment>
	);
};

export default NotesArchivePage;
