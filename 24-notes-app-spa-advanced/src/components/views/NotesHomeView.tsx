import type { Note } from '../../libs/api/note.service';
import NotesCreate from '../molecules/NotesCreate';
import NotesActive from '../organism/NotesActive';
import PropTypes from 'prop-types';
interface PropTypes {
	notes: Note[];
	addNote: (title: string, body: string) => void;
	deleteNote: (id: string) => void;
	toggleArchiveNote: (id: string) => void;
}

const NotesHomeView = (props: PropTypes) => {
	const { notes, addNote, deleteNote, toggleArchiveNote } = props;
	const activeNotes = notes?.filter((note) => !note.archived) ?? [];

	return (
		<div className={'max-w-2xl w-4/5 mx-auto p-4'}>
			<NotesCreate createNote={addNote} />
			<NotesActive
				notes={activeNotes}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</div>
	);
};

NotesHomeView.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
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

export default NotesHomeView;
