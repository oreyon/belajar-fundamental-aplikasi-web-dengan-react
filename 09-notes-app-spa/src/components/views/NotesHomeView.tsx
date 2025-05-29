import { type Note } from '../../utils/data';
import NotesCreate from '../molecules/NotesCreate';
import NotesActive from '../organism/NotesActive';

interface PropTypes {
	notes: Note[];
	addNote: (title: string, body: string) => void;
	editNote: (id: number, title: string, body: string) => void;
	deleteNote: (id: number) => void;
	toggleArchiveNote: (id: number) => void;
}

const NotesHomeView = (props: PropTypes) => {
	const { notes, addNote, editNote, deleteNote, toggleArchiveNote } = props;
	const activeNotes = notes.filter((note) => !note.archived);

	return (
		<div className={'max-w-2xl w-4/5 mx-auto p-4'}>
			<NotesCreate createNote={addNote} />
			<NotesActive
				notes={activeNotes}
				editNote={editNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</div>
	);
};

export default NotesHomeView;
