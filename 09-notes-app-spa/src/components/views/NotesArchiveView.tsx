import type { Note } from '../../utils/data';
import NotesArchive from '../organism/NotesArchive';
import PropTypes from 'prop-types';

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

NotesArchiveView.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired,
			archived: PropTypes.bool.isRequired,
		})
	).isRequired,
	editNote: PropTypes.func.isRequired,
	deleteNote: PropTypes.func.isRequired,
	toggleArchiveNote: PropTypes.func.isRequired,
};

export default NotesArchiveView;
