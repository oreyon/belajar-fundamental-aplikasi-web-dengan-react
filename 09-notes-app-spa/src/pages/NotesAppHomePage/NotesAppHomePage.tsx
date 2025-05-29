import { Fragment } from 'react/jsx-runtime';
import NotesSearchButton from '../../components/atoms/NotesSearchButton';
import NotesHomeView from '../../components/views/NotesHomeView';
import type { Note } from '../../utils/data';
import { useSearchParams } from 'react-router-dom';

interface PropTypes {
	notes: Note[];
	addNote: (title: string, body: string) => void;
	editNote: (id: number, title: string, body: string) => void;
	deleteNote: (id: number) => void;
	toggleArchiveNote: (id: number) => void;
}

const NotesAppHomePage = (props: PropTypes) => {
	const { notes, addNote, editNote, deleteNote, toggleArchiveNote } = props;

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
				editNote={editNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</Fragment>
	);
};

export default NotesAppHomePage;
