import type { Note } from '../../utils/data';
import NotesArchive from '../organism/NotesArchive';

interface PropTypes {
	notes: Note[];
	editNote: (id: number, title: string, body: string) => void;
	deleteNote: (id: number) => void;
	toggleArchiveNote: (id: number) => void;
}

const NotesArchiveView = (props: PropTypes) => {
	const { notes, editNote, deleteNote, toggleArchiveNote } = props;
	const archivedNotes = notes.filter((note: Note) => note.archived);

	return (
		<div className={'max-w-2xl w-4/5 mx-auto p-4'}>
			<NotesArchive
				notes={archivedNotes}
				editNote={editNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</div>
	);
};

export default NotesArchiveView;
