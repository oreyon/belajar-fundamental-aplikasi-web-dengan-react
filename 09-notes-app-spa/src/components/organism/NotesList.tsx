import type { Note } from '../../utils/data';
import NotesItem from '../molecules/NotesItem';
import PropTypes from 'prop-types';

interface PropTypes {
	notes: Note[];
	editNote: (id: number, title: string, body: string) => void;
	deleteNote: (id: number) => void;
	toggleArchiveNote: (id: number) => void;
}

const NotesList = (props: PropTypes) => {
	const { notes, editNote, deleteNote, toggleArchiveNote } = props;

	if (notes.length === 0) {
		return <p>No notes available</p>;
	}

	return (
		<div>
			{notes.map((note: Note) => (
				<NotesItem
					key={note.id}
					note={note}
					editNote={editNote}
					deleteNote={deleteNote}
					toggleArchiveNote={toggleArchiveNote}
				/>
			))}
		</div>
	);
};

NotesList.propTypes = {
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

export default NotesList;
