import type { Note } from '../../utils/data';
import NotesList from './NotesList';

interface PropTypes {
	notes: Note[];
	editNote: (id: number, title: string, body: string) => void;
	deleteNote: (id: number) => void;
	toggleArchiveNote: (id: number) => void;
}

const NotesArchive = (props: PropTypes) => {
	const { notes, editNote, deleteNote, toggleArchiveNote } = props;

	return (
		<div>
			<h2>Archived Notes</h2>
			<NotesList
				notes={notes}
				editNote={editNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</div>
	);
};

export default NotesArchive;
