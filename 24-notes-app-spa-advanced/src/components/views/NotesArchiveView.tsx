import type { Note } from '../../libs/api/note.service';
import NotesArchive from '../organism/NotesArchive';
import PropTypes from 'prop-types';

interface PropTypes {
	notes: Note[];
	deleteNote: (id: string) => void;
	toggleArchiveNote: (id: string) => void;
}

const NotesArchiveView = (props: PropTypes) => {
	const { notes, deleteNote, toggleArchiveNote } = props;
	const archivedNotes = notes?.filter((note: Note) => note.archived) ?? [];

	return (
		<div className={'max-w-2xl w-4/5 mx-auto p-4'}>
			<NotesArchive
				notes={archivedNotes}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</div>
	);
};

NotesArchiveView.propTypes = {
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

export default NotesArchiveView;
